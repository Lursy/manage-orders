import { OrderCore } from "../data/order.dao";
import { InputCreateOrderDto, InputFilterOrderDto } from "../interface/order.interface";

export class OrderService {
    static createOrder = async (orderDto: InputCreateOrderDto) => {
        if(!orderDto.totalPrice || !orderDto.userId || !orderDto.quantity){
            throw new Error("missing parameters");
        }

        const order = await OrderCore.createOrder(orderDto);

        return order;
    }
    
    static getOrders = async (orderDto: InputFilterOrderDto) => {
        if(!orderDto._id && !orderDto.userId){
            throw new Error("missing parameters");
        }

        const order = await OrderCore.getOrder(orderDto);

        return order;
    }
    
    static getSpent = async (spentDto: InputFilterOrderDto) => {
        if(!spentDto.userId){
            throw new Error("missing parameters");
        }

        const order = await OrderCore.getSpent(spentDto);

        return order;
    }
}