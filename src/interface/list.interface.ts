import { Document, Types } from "mongoose";

export interface IList extends Document {
    _id: Types.ObjectId;
    orderId: Types.ObjectId;
    productId: Types.ObjectId;
}