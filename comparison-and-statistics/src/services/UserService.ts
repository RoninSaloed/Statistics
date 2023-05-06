import api from "../http";
import { AxiosResponse } from "axios"
import { AuthRepsonse } from "../models/response/AuthResponse";
import { IUser } from "../models/User";
export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>("/users")
    }
}