import { InputCreateOPDto, InputFindOPDto } from "../interface/op.interface";
import { OrderProduct } from "../models/op.model";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";

export class OrderProductCore {
    static createOrderProduct = async (OPDto: InputCreateOPDto) => {
        let info: any = {
            state: "normal",
        }

        const orderExist = await Order.exists({ _id: OPDto.orderId });
        if (!orderExist) throw new Error("missing reference");

        const existingProducts = await Product.find({ _id: { $in: OPDto.productIds } })
            .select("_id")
            .lean();

        // evitando valores duplicados
        const validProductIds = new Set(existingProducts.map(p => p._id.toString()));
        const purchasedProducts = new Set(OPDto.productIds!);
    
        // filtrando produtos existentes
        const query = [...purchasedProducts]
            .filter(productId => validProductIds.has(productId.toString()))
            .map(productId => ({
                orderId: OPDto.orderId,
                product: productId
            }));

        if(query.length != purchasedProducts.size){
            const unregistered = query.filter(productId => !purchasedProducts.has(productId.product));

            info = {
                state: "warnning",
                description: "unregistered product IDs",
                unregistered
            }
        }

        const orderProducts = await OrderProduct.insertMany(query);

        return { info, list: orderProducts };
    };

    static findProductsInOrder = async (findDto: InputFindOPDto) => {
        const orderExist = Order.exists({ _id: findDto.orderId });

        if (!orderExist) throw new Error("missing reference");

        const products = await OrderProduct.find(findDto)
            .populate("product")
            .select("-_id product")
            .lean();

        return products;
    }
}