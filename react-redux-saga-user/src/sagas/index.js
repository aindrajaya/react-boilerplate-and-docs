import { all } from "@redux-saga/core/effects";
import userSagas from "./users";

export default function* rootSaga(){
  //running all sagas
  yield all([
    ...userSagas
  ])
}