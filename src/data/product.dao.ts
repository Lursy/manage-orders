import { InputCreateProductDto } from "../interface/product.interface";
import { Product } from "../models/product.model";

export class ProductCore {
    static creteProduct = async (productDto: InputCreateProductDto) => {
        const product = await Product.create(productDto);

        return product
    }
}