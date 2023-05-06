import { IUser } from "../User"

export interface AuthRepsonse {
    accessToken: string
    refreshToken: string
    user: IUser
}