import React, { useContext, useEffect } from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite';

function App() {
  const { store } = useContext(Context)



  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])
  if (store.isLoading) {
    return (
      <div>loading...</div>
    )
  }
  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }
  return (
    <div className="App">
      <h1>{store.isAuth ? `Користувач авторизований ${store.user.email}` : "Авторизуйтесь"}</h1>
      <h1>{store.user.isActivated ? "Акаунт підтверджений" : "Підтвердіть акаунт"}</h1>
      <button onClick={() => store.logout()}>Log out</button>
    </div>
  );
}

export default observer(App);

