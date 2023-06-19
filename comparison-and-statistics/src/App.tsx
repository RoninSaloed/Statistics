import React, { useContext, useEffect } from 'react';
import './App.css';
import LoginForm from './components/loginForm/loginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import Menu from './components/menu/menu';
import Preview from './components/preview/preview';
import Layouts from './components/Layouts';

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
      <Menu />
      <h1 className='isActivated'>{store.user.isActivated ? <Layouts /> : "Підтвердіть акаунт"}</h1>
    </div>
  );
}

export default observer(App);

