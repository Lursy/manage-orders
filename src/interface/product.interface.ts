import { Document, Types } from "mongoose";

export interface IProduct extends Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
}