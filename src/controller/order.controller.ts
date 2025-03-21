import { InputCreateOPDto, InputFilterOPDto } from "../interface/op.interface";
import { OrderService } from "../service/order.service";
import { ProductService } from "../service/product.service";
import { OrderProductService } from "../service/op.service";
import { errorResponse } from "../utils/errorResponse";
import { Request, Response } from "express";
import { InputFilterOrderDto } from "../interface/order.interface";

export class OrderController {
    static createOrder = async (req: Request, res: Response) => {
        const orderDto: InputCreateOPDto = req.body;

        try {
            const infoList = await ProductService.getInfoListProduct(orderDto.productIds);
            
            const order = await OrderService.createOrder({
                userId: orderDto.userId,
                quantity: infoList.count,
                totalPrice: infoList.totalPrice
            });

            const orderProduct = await OrderProductService.registerOrdersProduct({
                orderId: order._id,
                productIds: orderDto.productIds
            });

            return res.status(200).json(order);
        } catch (error) {
            return errorResponse(error, res);
        }
    }

    static listOrders = async (req: Request, res: Response) => {
        const orderDto: InputFilterOPDto = req.body;

        try {
            const listOrders = await OrderProductService.findProductsInOrder(orderDto);

            return res.status(200).json(listOrders);
        } catch (error) {
            return errorResponse(error, res);
        }
    }
    
    static getOrders = async (req: Request, res: Response) => {
        const orderDto: InputFilterOrderDto = req.body;

        try {
            const listOrders = await OrderService.getOrders(orderDto);

            return res.status(200).json(listOrders);
        } catch (error) {
            return errorResponse(error, res);
        }
    }
    
    static getSpent = async (req: Request, res: Response) => {
        const orderDto: InputFilterOrderDto = req.body;

        try {
            const listOrders = await OrderService.getSpent(orderDto);

            return res.status(200).json(listOrders);
        } catch (error) {
            return errorResponse(error, res);
        }
    }
}