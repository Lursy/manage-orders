import { Types } from "mongoose";
import { InputCreateOrderDto, InputFilterOrderDto } from "../interface/order.interface";
import { Order } from "../models/order.model";
import { User } from "../models/user.model";

export class OrderCore {
    static createOrder = async (orderDto: InputCreateOrderDto) => {
        const userExists = await User.exists({ _id: orderDto.userId });

        if (!userExists) throw new Error("reference not found");

        const order = await Order.create(orderDto);

        return order;
    }

    static getOrder = async (orderDto: InputFilterOrderDto) => {
        const userExists = await User.exists({ _id: orderDto.userId });

        if (!userExists) throw new Error("reference not found");

        const order = await Order.find(orderDto, "-userId -__v");

        return order;
    }

    static getSpent = async (orderDto: InputFilterOrderDto) => {
        const result = await Order.aggregate([
            {
                $match: {
                    userId: new Types.ObjectId(orderDto.userId)
                }
            },
            {
                $group: {
                    _id: null,  
                    totalSpent: { $sum: "$totalPrice" },  // Soma os valores dos pedidos
                }
            },
            {
                $project: {
                    _id: 0,
                    totalSpent: { $round: ["$totalSpent", 2] },
                }
            }
        ]);

        return result[0];
    }
}