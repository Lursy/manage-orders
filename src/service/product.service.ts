import { ProductCore } from "../data/product.dao";
import { InputCreateProductDto } from "../interface/product.interface";

export class ProductService {
    static CreateProduct = async (productDto: InputCreateProductDto) => {
        if(!productDto.description || !productDto.name || !productDto.price){
            throw new Error("missing parameters");
        }

        return await ProductCore.creteProduct(productDto);
    }
}