import { UserCore } from "../data/user.dao";
import { InputCreateUserDto } from "../interface/user.interface";

export class UserService{
    static createUser = async (userDto: InputCreateUserDto) => {
        if(!userDto.email || !userDto.name || !userDto.phoneNumber){
            throw new Error("missing parameters");
        }

        return await UserCore.creteUser(userDto);
    }
}