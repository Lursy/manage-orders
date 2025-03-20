import { Document, Types } from "mongoose";

export interface IOrder extends Document {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    totalPrice: number;
    createdAt: Date;
}