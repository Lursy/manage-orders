import { Document, Types } from "mongoose";

export interface IOrder extends Document {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    totalPrice: number;
    quantity: number;
    createdAt: Date;
}

export interface InputCreateOrderDto {
    userId?: Types.ObjectId;
    totalPrice?: number;
    quantity?: number;
}

export interface InputFilterOrderDto {
    _id?: Types.ObjectId;
    userId?: Types.ObjectId;
}