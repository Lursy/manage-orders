import { IUser } from '../interface/user.interface';
import { Schema, model } from 'mongoose';


const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
}, {
    autoIndex: true
});

const User = model<IUser>('User', UserSchema);

export { User };
