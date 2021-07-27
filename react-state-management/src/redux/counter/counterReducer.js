
import {INCREMENT, DECREMENT, RESET} from "./actions.js"

const initialState = {
  count : 0
}

//Reducer
export const counterReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case RESET:
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}