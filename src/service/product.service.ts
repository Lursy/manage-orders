import { Types } from "mongoose";
import { ProductCore } from "../data/product.dao";
import { InputCreateProductDto } from "../interface/product.interface";

export class ProductService {
    static createProduct = async (productDto: InputCreateProductDto) => {
        if(!productDto.description || !productDto.name || !productDto.price){
            throw new Error("missing parameters");
        }

        return await ProductCore.creteProduct(productDto);
    }
    
    static getInfoListProduct = async (ids?: Types.ObjectId[]) => {
        if(!ids || ids.length == 0){
            throw new Error("missing parameters");
        }

        if(!Array.isArray(ids)){
            ids = [ids]
        }

        return await ProductCore.getInfoListProduct(ids);
    }
}