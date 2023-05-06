import api from "../http";
import { AxiosResponse } from "axios"
import { AuthRepsonse } from "../models/response/AuthResponse";
export default class AuthService {
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthRepsonse>> {
        return api.post<AuthRepsonse>("/registration", { email, password })
    }
    static async login(email: string, password: string): Promise<AxiosResponse<AuthRepsonse>> {
        return api.post<AuthRepsonse>("/login", { email, password })
    }
    static async logout(): Promise<void> {
        return api.post("/logout")
    }
}