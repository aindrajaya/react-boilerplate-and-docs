import React, {useState, useReducer, useContext, useEffect} from 'react'
import TodoContext from './todo-context'
import {uuid} from "uuidv4"
// import axios from "axios"

export default function TodoListContext() {
  const [todo, setTodo] = useState("") //todo untuk menyimpan event hasil dari element input
  const {addTodo, deleteTodo, todos, loadTodo} = useContext(TodoContext)
  
  useEffect(() => {
    loadTodo() //menampilkan state dari database
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if(todo==="") return;
    const newTodo ={
      id: uuid(), //Math.random() akan generate random number dari 0 < 1
      todo: todo
    }
    // axios.post("http://localhost:3006/todsssos", newTodo)
    addTodo(newTodo)
    setTodo("")
  }

  return (
    <div>
      <h1>Todo List using Context</h1>
      <form onSubmit={submit}>
        <input 
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)} //ketika ada perubahan maka data akan disimpan ke todo
          placeholder="Masukan Todolist..."
        />
        <button>Submit</button>
      </form>
      {
        todos.map((item, idx) => 
          <ul key={idx}>
            <li>{item.todo}</li>
            <i onClick={() => deleteTodo(item.id)}>X</i>
          </ul>
        )
      }
    </div>
  )
}
