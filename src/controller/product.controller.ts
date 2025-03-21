import { Request, Response } from "express";
import { InputCreateProductDto } from "../interface/product.interface";
import { ProductService } from "../service/product.service";
import { errorResponse } from "../utils/errorResponse";

export class ProductController {
    static registerProduct = async (req: Request, res: Response) => {
        const productDto: InputCreateProductDto = req.body;

        try {
            const product = await ProductService.createProduct(productDto);

            return res.status(200).json(product);
        } catch (error) {
            return errorResponse(error, res);
        }
    }
}