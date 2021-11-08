import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import { logOut } from './store/authServices/authActions';

function AppAuth(){
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return(
    <div className="App">
      {auth.currentuser ? (
        <>
          <div>Connected user with token {auth.currentuser.token}</div>
          <button onClick={()=> dispatch(logOut())}>Log out</button>
        </>
      ) : (
        <>
          <LoginPage />
          <RegisterPage />
          {auth.error ? <span>{auth.error?.response.data}</span> : null}
        </>
      )}
    </div>
  )
}

export default AppAuth