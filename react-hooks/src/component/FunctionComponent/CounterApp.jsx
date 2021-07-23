import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonComponent'

export default function CounterAppFunc() {
  console.log("init state, seperti constructor")
  let [count, setCount] = useState(0)
  /**
   * useEffect(() => {
   *   effect
   *   return() => {
   *     cleanup
   *   }
   * }, [input])
   */

  //first Render
  useEffect(() => {
    console.log("-> first render(), state awal")
  })

  //componentDidMount
  useEffect(() => {
    console.log("-> seperti componentDidMount, state awal")
  }, []) //supaya dia tidak merender berulang kali

  //componentDidUpdate
  useEffect(() => {
    if(count < 0 || count > 0){
      console.log("-> seperti componentDidUpdate, berjalan ketika state berubah dari nilai awal")
    }
  }, [count])

  //componentWillUnmount
  useEffect(() => {
    return() => {
      console.log("-> seperti componentWillUnmount")
    }
  }, [])

  console.log(`State status nilainya (${count})`)
  return (
    <div>
      <div className="app">
        <div>
          <div className="count">
            <h3>Count: </h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"+"} action={() => setCount(count+1)}/>
            <Button title={"0"} action={() => setCount(count = 0)}/>
            <Button title={"-"} action={() => setCount(count -1)}/>
          </div>
        </div>
    </div>
  </div>
  )
}
