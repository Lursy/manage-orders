import { InputCreateListDto } from "../interface/list.interface";
import { List } from "../models/list.model";

export class ListCore {
    static creteList = async (listDto: InputCreateListDto) => {
        const list = new List(listDto);

        return list
    }
}