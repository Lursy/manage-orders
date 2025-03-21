import { Types } from "mongoose";
import { InputCreateProductDto } from "../interface/product.interface";
import { Product } from "../models/product.model";

export class ProductCore {
    static creteProduct = async (productDto: InputCreateProductDto) => {
        const product = await Product.create(productDto);

        return product;
    }

    static getInfoListProduct = async (ids: Types.ObjectId[]) => {
        const idlist = ids.map(id => new Types.ObjectId(id));

        const result = await Product.aggregate([
            { $match: { _id: { $in: idlist } } },
            {
                $group: {
                    _id: null,
                    totalPrice: { $sum: "$price" },
                    count: { $sum: 1 }
                }
            }, {
                $project: {
                    _id: 0,
                    totalPrice: { $round: ["$totalPrice", 2] }, // Arredonda para 2 casas decimais
                    count: 1
                }
            }
        ]);

        if (!result[0]) throw new Error("reference not found");

        return result[0];
    }
}