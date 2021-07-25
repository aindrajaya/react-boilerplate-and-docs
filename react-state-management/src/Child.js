import { useContext } from "react"
import { ColorContext } from "./index"

export const ChildComponent = () => {
  // const a = useContext(ColorContext) //
  return(
    // <div style={{backgroundColor: a.blue}}>
      <h2>Ini child Component</h2>
    // </div>
  )
}