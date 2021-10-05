import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers and rootSaga
import reducer from "../reducers";
import rootSaga from "../sagas";


//declare the saga middleware and middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(reducer, middleware)
// const store = createStore(reducer, composeWithDevTools(middleware))

export default store

sagaMiddleware.run(rootSaga)