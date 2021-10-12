import React, {useState} from 'react'
import ListsTodo from './ListsTodo'
import TodoForm from './TodoForm'

export default function TodoList({saveTodo}) {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')  

  console.log(todoValue)

  const addTodo = (event) => {
    event.preventDefault()
    const add = [...todos, {
      id: todos.length + 1,
      task: todoValue
    }]
    setTodos(add)
    setTodoValue('')
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id )
    setTodos(newTodos)
  }

  console.log(todos)

  return (
    <div>
     <TodoForm klik={addTodo} value={todoValue} setValue={setTodoValue}/>
      <hr />
      <ListsTodo todos={todos} del={deleteTodo}/>
    </div>
  )
}
