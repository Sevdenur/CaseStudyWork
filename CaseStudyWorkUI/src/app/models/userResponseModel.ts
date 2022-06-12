import { User } from "./user";
import { ResponseModel } from "./responseModel";

export interface USerResponseModel extends ResponseModel{
    data:User[]
}