import { Request, Response } from "express";
import { InputCreateUserDto } from "../interface/user.interface";
import { UserService } from "../service/user.service";
import { errorResponse } from "../utils/errorResponse";

export class UserController {
    static registerCustomer = async (req: Request, res: Response) => {
        const userDto: InputCreateUserDto = req.body;

        try {
            const user = await UserService.createUser(userDto);

            return res.status(200).json(user);
        } catch (error) {
            return errorResponse(error, res);
        }
    }
}