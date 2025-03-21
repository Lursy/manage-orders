import { InputCreateOrderDto, InputFilterOrderDto } from "../interface/order.interface";
import { Order } from "../models/order.model";
import { User } from "../models/user.model";

export class OrderCore {
    static createOrder = async (orderDto: InputCreateOrderDto) => {
        const userExists = await User.exists({ _id: orderDto.userId });

        if(!userExists) throw new Error("missing reference");

        const order = await Order.create(orderDto);

        return order;
    }

    static getSpent = async (orderDto: InputFilterOrderDto) => {
        const result = await Order.aggregate([
            { $match: { 
                _id: orderDto._id,
                userId: orderDto.userId
             } }, // Filtra os pedidos pelo userId
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