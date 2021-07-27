import {combineReducers} from "redux"
import { counterReducer } from "./counter/counterReducer"
import {todoReducer} from "./todolist/index"

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoReducer
})

export default rootReducer