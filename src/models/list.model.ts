import { Schema, Types, model } from 'mongoose';
import { IList } from '../interface/list.interface';


const ListSchema: Schema = new Schema({
    orderId: { type: Types.ObjectId, ref: "Order", required: true },
    productId: { type: Types.ObjectId, ref: "Product", required: true },
}, {
    autoIndex: true
});

const List = model<IList>('List', ListSchema);

export { List };
