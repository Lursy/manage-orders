import { Document, Types } from "mongoose";

export interface IOrder extends Document {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    totalPrice: number;
    createdAt: Date;
}

export interface InputCreateOrderDto {
    userId?: Types.ObjectId;
    totalPrice?: number;
}