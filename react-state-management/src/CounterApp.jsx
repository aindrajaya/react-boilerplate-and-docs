import React, { useState, useReducer } from 'react'

//fungsi reducer - untuk mengolah data dari global state, reducer bisa ditaruh dimana aja (di luar file)
const bisaDiganti = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

//initial state/ state awal/ kondisi awal -> bisa menjadi global state
const bisaDiganti2 = {
  count: 0
}

export default function CounterApp() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(bisaDiganti, bisaDiganti2) //declare useReducer -> 

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </div>
  )
}
