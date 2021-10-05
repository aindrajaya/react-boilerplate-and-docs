import { call, put, take, takeEvery } from "@redux-saga/core/effects";
import { 
  FETCH_LISTS,
  ADD_LIST,
  EDIT_LIST,
  DELETE_LIST,
  FETCH_LISTS_SUCCESS,
  ADD_LIST_SUCCESS,
  EDIT_LIST_SUCCESS,
  DELETE_LIST_SUCCESS
 } from "../constants/action-types";

 const BASE_URL = "http://localhost:3004"
 const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
 }

function* fetchLists(){
  const lists = yield call(() => 
    fetch(`${BASE_URL}/todolists`, {
      method: "GET"
    }).then(res => res.json())
  )
  console.log("saga FETCH_LISTS_SUCCESS", lists)
  yield put({
    type: FETCH_LISTS_SUCCESS,
    payload: {
      lists
    }
  })
}

function* addList({payload}) {
  const list = yield call(() => 
    fetch(`${BASE_URL}/todolists`, {
      headers,
      body: JSON.stringify(payload.list),
      method: "POST"
    }).then(res => res.json())
  )
  console.log("saga ADD_LIST_SUCCESS", {list})
  yield put({
    type: ADD_LIST_SUCCESS, 
    payload: {list}
  })
}

function* editTodo({payload}){
  const id = payload.list.id;
  const list = yield call(() => 
    fetch(`${BASE_URL}/todolists/${id}`,{
      headers,
      body: JSON.stringify(payload.list),
      method: "PUT"
    }).then(res => res.json())
  )
  console.log("saga EDIT_LIST_SUCCESS", {list})
  yield put({
    type:EDIT_LIST_SUCCESS, 
    payload: {list}
  })
}

function* deleteList({payload}){
  const id = payload.id
  yield call(() => 
    fetch(`${BASE_URL}/todolists/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  )
  console.log("saga DELETE_LIST_SUCCESS", id)
  yield put({
    type: DELETE_LIST_SUCCESS,
    payload: {id}
  })
}

function* watchFetchLists(){
  yield takeEvery(FETCH_LISTS, fetchLists)
}

function* watchAddTodo(){
  yield takeEvery(ADD_LIST, addList)
}

function* watchEditTodo(){
  yield takeEvery(EDIT_LIST, editTodo)
}

function* watchDeleteTodo(){
  yield takeEvery(DELETE_LIST, deleteList)
}

export default [
  watchAddTodo(),
  watchDeleteTodo(),
  watchEditTodo(),
  watchFetchLists()
]