import { Document, Types } from "mongoose";

export interface IOP extends Document {
    _id: Types.ObjectId;
    orderId: Types.ObjectId;
    productId: Types.ObjectId;
}

export interface InputCreateOPDto {
    orderId?: Types.ObjectId;
    productIds?: Types.ObjectId[];
}

export interface InputFindOPDto {
    orderId?: Types.ObjectId;
}