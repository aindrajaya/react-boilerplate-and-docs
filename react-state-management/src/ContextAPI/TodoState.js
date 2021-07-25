import axios from "axios"
import React, {useReducer} from "react"
import TodoContext from "./todo-context"

//reducer function
const todoReducer = (state, action) => {
  /**
   * todoReducer ini spesifik menangani proses manipulasi pada global state di dalam object todos
   */
  switch (action.type) {
    case "ADD_TODO":
      /**
       * CASE
       * merupakan value dari action.type bisa apapun tulisannya, tergantung dari logic bisnis model. 
       */
      return{
        ...state,
        todos: [...state.todos, action.payload]
        /**
         * ...state.todos => spread(disebar/ dibuka) data todos sebelumnya.
         * lalu ditambah action.payliod, dimana action.payload bernilai object todo={id: id, todo: todo}
         */
      }
    case "DELETE_TODO":
      return{
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload)]
        /**
         * Filter
         * item.id !== action.payload / item.id yg ditunjuk
         * item.id !== item.id
         * 1 !== 3 true
         * 2 !== 3 true
         * 3 !== 3 false
         * brarti yg disimpan id satu dan dua. Id 3 tidak disimpan
         */
      }
    case "LOAD_TODO":
      return{
        todos: action.payload
      }
    default:
      break;
  }
}

const TodoState = (props) => {
  /**
   * Memakai props agar bisa dipakai child komponent/ mengirim state ke komponen yg di bungkus oleh TodoState
   */
  const initState = {
    //initial state /kondisi awal -> ketika object di load pertama kali
    todos: []
  }

  const [state, dispatch] = useReducer(todoReducer, initState)

  const loadTodo = async() => {
    const res = await axios.get("http://localhost:3006/todos")
    const dataAPI = await res.data
    await dispatch({
      type: "LOAD_TODO",
      payload: dataAPI 
    })
    console.log(res.data)
  }

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:3006/todos", newTodo) //manipulasi server
    await dispatch({
      type: "ADD_TODO",
      payload: newTodo
    }); //manipulasi state
  }
   
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3006/todos/${id}`)
    await dispatch({
      type: "DELETE_TODO", 
      payload: id
    })
  }

  return(
    <TodoContext.Provider value={{
      /**
       * TodoContext.Provider untuk menyediakan state yang akan digunakan oleh komponen yg dibungkus dgn TodoState
       * todos, addTodo, deleteTodo adalah data yang dikirim ke komponen yg dibungkus oleh TodoState
       */
      todos: state.todos,
      addTodo,
      deleteTodo,
      loadTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState


