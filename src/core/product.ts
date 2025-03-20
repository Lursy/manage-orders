import { InputCreateProductDto } from "../interface/product.interface";
import { Product } from "../models/product.model";

export class ProductCore {
    static creteProduct = async (productDto: InputCreateProductDto) => {
        const product = new Product(productDto);

        return product
    }
}