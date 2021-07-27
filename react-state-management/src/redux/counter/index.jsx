import React, {Fragment, Component} from "react"
import {useDispatch, useSelector, connect} from "react-redux" //

//import actions
import {increment, decrement, reset} from "./actions"


//Counter App
export function CounterApp() {
  //Redux + Hooks
  const dispatch = useDispatch() //ngirim ke state
  const countHooks = useSelector(store => store.count) //ngambil data dari state
  return (
    <Fragment>
       {/* 4. ubah JSX menggunakan state yang ada di useReducer */}
       <h3>React Hooks State Management Counter</h3>
       <h1>Value: {countHooks}</h1>
       <button onClick={() => dispatch(increment())}>+</button>
       <button onClick={() => dispatch(reset())}>0</button>
       <button onClick={() => dispatch(decrement())}>-</button>
    </Fragment>
  );
}

class CounterAppNoHooks extends Component{
  render(){
    return(
      <div>
        <h3>Pure Redux Class Components</h3>
        <h1>Clicked {this.props.count} times</h1>
        <button onClick={() => {this.props.increment()}}>+</button>
        <button onClick={() => {this.props.reset()}}>0</button>
        <button onClick={() => {this.props.decrement()}}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(
  mapStateToProps, 
  {
    increment, 
    decrement, 
    reset
  }
    )(CounterAppNoHooks);