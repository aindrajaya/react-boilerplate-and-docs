import { call, all } from "@redux-saga/core/effects";

import { authSagas } from "./authServices/authSagas";

export default function* rootSaga(){
  yield call([call(authSagas)])
}