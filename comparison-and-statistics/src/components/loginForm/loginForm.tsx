import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { Context } from "../.."
import { observer } from "mobx-react-lite"
import './loginForm.css';
import Store from "../../store/store"

const LoginForm: FC = () => {







    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { store } = useContext(Context)

    const storeError = new Store();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setError(null);
        try {
            await storeError.login(email, password, setError);
            // ...
        } catch (error) {
            console.log('An error occurred:', error);
        }
    };
    const [emailIsDirty, setEmailIsDirty] = useState(false)
    const [passwordIsDirty, setPasswordlIsDirty] = useState(false)
    const [emailError, setEmailError] = useState("Не може бути пустим")
    const [passwordError, setPasswordError] = useState("Не може бути пустим")
    const [formValid, setFormValid] = useState(true)
    const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        switch (e.target.name) {
            case "Email":

                setEmailIsDirty(true)
                break
            case "Password":
                setPasswordlIsDirty(true)
                break
        }

    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Incorrect E-mail")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 20) {
            setPasswordError("The password cannot be less than 4 characters and no more than 20")
            if (!e.target.value) {
                setPasswordError("The password cannot be empty")
            }
        } else {
            setPasswordError("")
        }
    }
    const checkLogin = () => {
        store.login(email, password)
        handleLogin(email, password)


    }
    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    return (
        <div className="Login">
            <div className="loginBody">
                <div className="loginInputs">
                    <label >E-mail</label>
                    <input className={"loginEmail"} type="text"
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}
                        value={email}
                        placeholder="Email"
                        name="Email"
                    />
                    {(emailIsDirty && emailError) && <div className="loginEmailError">{emailError}</div>}
                    <label >Password</label>
                    <input className="loginPassword" type="text"
                        onChange={e => passwordHandler(e)}
                        onBlur={e => blurHandler(e)}
                        value={password}
                        placeholder="Password"
                        name="Password"
                    />
                    {(passwordIsDirty && passwordError) && <div className="loginPasswordError">{passwordError}</div>}
                </div>
                <div className="loginButtons">
                    <button disabled={!formValid} onClick={() => checkLogin()}>Log in</button>
                    <button disabled={!formValid} onClick={() => store.registration(email, password)}>Up sign</button>
                    {error && <div className="loginCheckUser">{error}</div>}
                </div>

            </div>

        </div>
    )
}

export default observer(LoginForm) 