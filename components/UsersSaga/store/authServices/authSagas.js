import axios from 'axios'
import {all, call, put, takeLatest} from 'redux-saga/effects'

import {logInFailure, logInSuccess, registerFailure, registerSuccess} from './authActions'
import types from './authActionsTypes'

const logIn = async(email, password) => {
  const res = await axios.post("http://localhost:3001/login", {
    email,
    password
  })
  return {token: res.data.accessToken}
}

const register = async(email, password) => {
  await axios.post('/register', {
    email,
    password
  })
}

export function* logInWithCredentials({payload: {email, password}}){
  try {
    const user = yield logIn(email, password)
    yield put(logInSuccess(user))
  } catch (e) {
    yield put(logInFailure(e))
  }
}

export function* registerWithCredentials({payload: {email,password}}){
  try {
    yield register(email, password)
    yield put(registerSuccess({
      email, password
    }))
  } catch (e) {
    yield put(registerFailure(e))
  }
}

export function* logInAfterRegister({payload: {email, password}}){
  yield logInWithCredentials({payload: {
    email, password
  }})
}

export function* onLogInStart(){
  yield takeLatest(types.LOG_IN_START, logInWithCredentials)
}

export function* onRegisterStart(){
  yield takeLatest(types.REGISTER_START, registerWithCredentials)
}

export function* onRegisterSuccess(){
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister)
}

export function* authSagas(){
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ])
}