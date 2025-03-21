import { OrderProductCore } from "../data/op.dao";
import { InputCreateOPDto, InputFindOPDto } from "../interface/op.interface";

export class OrderProductService {
    static findProductsInOrder = async (findDto: InputFindOPDto) => {
        if(!findDto.orderId) throw new Error("missing parameters");

        return await OrderProductCore.findProductsInOrder(findDto);
    }

    static registerOrdersProduct = async (OPDto: InputCreateOPDto) => {
        if(!OPDto.orderId || !OPDto.productIds) throw new Error("missing parameters");

        if(!Array.isArray(OPDto.productIds)){
            OPDto.productIds = [OPDto.productIds];
        } else {
            if(OPDto.productIds.length === 0) throw new Error("missing parameters");
        }

        return await OrderProductCore.createOrderProduct(OPDto);
    }
}