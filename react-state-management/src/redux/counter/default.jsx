
import React, {Fragment, useReducer} from 'react'
// import './App.css';

//2. Declare reducerFunction => combine 2 inputmenjadi satu output dari hasil switchcase
const reducerFunction = (state, action) => {
  //untuk actions/tindakan
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    case "reset":
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}

//3. declare initial state dengan value count 0
const initialState = {
  count : 0
}

function CounterApp() {
  // const [count, setCount] = useState(initialState) //state
  const [state, dispatch] = useReducer(reducerFunction, initialState) //step 1. Declare app counter ini menggunakan useReducer
  return (
    <Fragment>
       {/* 4. ubah JSX menggunakan state yang ada di useReducer */}
       <h3>React Hooks State Management Counter</h3>
       <h1>{state.count}</h1>
       <button onClick={() => dispatch({type: 'increment'})}>+</button>
       <button onClick={() => dispatch({type: 'reset'})}>0</button>
       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </Fragment>
  );
}

export default CounterApp;
