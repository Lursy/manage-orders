import { InputCreateOrderDto } from "../interface/order.interface";
import { Order } from "../models/order.model";

export class OrderCore {
    static createOrder = async (orderDto: InputCreateOrderDto) => {
        const order = new Order(orderDto);

        return order;
    }

    static getOrders = async (userId: string) => {
        return await Order.find({
            userId
        });
    }

    static getSpent = async (userId: string) => {
        const result = await Order.aggregate([
            { $match: { userId } }, // Filtra os pedidos pelo userId
            {
                $group: {
                    _id: null,  // Não agrupar por um campo específico
                    totalSpent: { $sum: "$totalPrice" }  // Soma os valores dos pedidos
                }
            }
        ]);

        return { totalSpent: result.length == 0 ? 0 : result[0].totalSpent };
    }
}