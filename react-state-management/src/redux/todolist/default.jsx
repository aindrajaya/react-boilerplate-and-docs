import React, {useState, useReducer} from 'react'

//reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return{
        ...state,
        todos: [...state.todos, action.payload]
      }
    case "DELETE_TODO":
      return{
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload)]
      }
    default:
      break;
  }
}

//initial stata /kondisi awal -> ketika object di load pertama kali
const initState = {
  todos: []
}

export default function TodoList() {
  const [todo, setTodo] = useState("") //todo untuk menyimpan hasil dari element input
  const [state, dispatch] = useReducer(todoReducer, initState)

  const deleteTodos = id => {
    dispatch({type: "DELETE_TODO", payload: id})
  }

  const submit = (e) => {
    e.preventDefault()
    if(todo==="") return;
    dispatch({
      type: "ADD_TODO",
      payload: { //payload untuk berinteraksi dgn dom jsx
        id: Math.random(), //Math.random() akan generate random number dari 0 < 1
        todo
      }
    });
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Masukan Todolist..."
        />
        <button>Submit</button>
      </form>
  
      {
        state.todos.map(item => 
          <ul>
            <li>{item.todo}</li>
            <i onClick={() => deleteTodos(item.id)}>X</i>
          </ul>
        )
      }
    </div>
  )
}
