import { InputCreateUserDto } from "../interface/user.interface";
import { User } from "../models/user.model";

export class UserCore {
    static creteUser = async (userDto: InputCreateUserDto) => {
        const user = new User(userDto);

        return user
    }
}