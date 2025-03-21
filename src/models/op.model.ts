import { Schema, Types, model } from 'mongoose';
import { IOP } from '../interface/op.interface';

const OPSchema: Schema = new Schema({
    orderId: { type: Types.ObjectId, required: true },
    product: { type: Types.ObjectId, ref: "Product", required: true },
}, {
    id: false,
    autoIndex: true
});

const OrderProduct = model<IOP>('OrderProduct', OPSchema);

export { OrderProduct };