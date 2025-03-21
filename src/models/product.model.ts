import { IProduct } from '../interface/product.interface';
import { Schema, model } from 'mongoose';

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    autoIndex: true
});

const Product = model<IProduct>('Product', ProductSchema);

export { Product };
