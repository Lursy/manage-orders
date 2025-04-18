import { Schema, Types, model } from 'mongoose';
import { IOrder } from '../interface/order.interface';

const OrderSchema: Schema = new Schema({
    userId: { type: Types.ObjectId, ref: "Identity", required: true },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() },
}, {
    autoIndex: true
});

const Order = model<IOrder>('Order', OrderSchema);

export { Order };
