//action function//Actions Type Constant
export const INCREMENT = "increment"
export const DECREMENT = "decrement"
export const RESET = "reset"

//Actions
export const increment = () => {
  return{
    type: INCREMENT
  }
}

export const decrement = () => {
  return{
    type: DECREMENT
  }
}

export const reset = () => {
  return{
    type: RESET
  }
}

//Initial State

