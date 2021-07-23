import React, { Component } from 'react'
import {Button} from '../ButtonComponent'
import './counter.css'

export default class CounterAppClass extends Component {
  constructor(){
    console.log("-> constructor jalan")
    super();
    this.state = {
      count: 0 //default value dari count
    }
  }

  //function increment
  increment = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  //function decrement
  decrement = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  //function reset
  reset = () => {
    this.setState({
      count: 0
    })
  }
  
  render() {
    console.log("-> render jalan")
    const {count} = this.state
    console.log(`State saat ini (${count})`)
    return (
    <div>
      <div className="app">
        <div>
          <div className="count">
            <h3>Count: </h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"+"} action={this.increment}/>
            <Button title={"0"} action={this.reset}/>
            <Button title={"-"} action={this.decrement}/>
          </div>
        </div>
      </div>
    </div>
    )
  }

  //ini ketika di pasang awal
  componentDidMount(){
    //side effect
    console.log("-> componentDidMount jalan")
  }

  //ini ketika ada update di state
  componentDidUpdate(){
    console.log("-> componentDidUpdate jalan")
  }

  //ini ketika componentya di destroy/ hilang dari dom
  componentWillUnmount(){
    console.log("-> componentWillUnmount jalan")
  }
}
