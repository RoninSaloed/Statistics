import { IUser } from "../models/User";
import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthRepsonse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false
    constructor() {
        makeAutoObservable(this)
    }
    setAuth(bool: boolean) {
        this.isAuth = bool
    }
    setUser(user: IUser) {
        this.user = user
    }
    setLoading(bool: boolean) {
        this.isLoading = bool
    }
    async login(email: string, password: string, errorCallback?: (error: string) => void) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e: any) {
            const errorMessage = e.response?.data?.message || 'An error occurred';
            console.log(errorMessage);
            if (errorCallback) {
                errorCallback(errorMessage);
            }
        }
    }
    async registration(email: string, password: string, errorCallback?: (error: string) => void) {
        try {
            const response = await AuthService.registration(email, password)
            console.log(response)

            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e: any) {
            const errorMessage = e.response?.data?.message || 'An error occurred';
            console.log(errorMessage);
            if (errorCallback) {
                errorCallback(errorMessage);
            }
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem("token")
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthRepsonse>(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response)

            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e: any) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }
}