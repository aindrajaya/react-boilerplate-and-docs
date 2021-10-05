import {all} from 'redux-saga/effects'
import listsSagas from './lists'

function* rootSaga(){
  yield all([...listsSagas])
}

export default rootSaga