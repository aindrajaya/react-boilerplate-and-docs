import { call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import * as actions from '../actions/users'
import * as api from '../api'

//1. get users with functions generators as the worker saga
function* getUsers(){
  try {
    //yield untuk menghasilkan value baru/ sama dengan return
    const result = yield call(api.getUsers);

    //dia put/menagmbil fungsi getUsersSuccess untuk memasuk kan data dari api
    yield put(actions.getUsersSuccess({
      users: result.data
    }))
  } catch (error) {
    
  }
}

//4. send create user with functions generators as the worker saga
function* createUser({payload}){
  try {
    yield call(api.createUser, {
      firstName: payload.firstName,
      lastName: payload.lastName
    });
    yield call(getUsers)
  } catch (error) {
    
  }
}

//2. generate function to watch all get user data types action as the watcher saga
function* watchGetUsersRequest(){
  //handling concurrent task/process
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

//5. generate function to watch all create user data types action as the watcher saga
function* watchCreateUserRequest(){
  //handling concurrent task/process
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

//3. store the function watchGetUserRequest to the sagas array, and then export it
const userSagas = [
  //running secara paralel -> Bersamaan
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest)
]

export default userSagas