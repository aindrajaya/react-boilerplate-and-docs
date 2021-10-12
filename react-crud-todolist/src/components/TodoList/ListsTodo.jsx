import React from 'react'
import TodoItem from './TodoItem'

export default function ListsTodo({todos, del}) {
  return (
    <div className="todolists">
        <ul>
          {todos.map((list) => (
            <TodoItem item={list.task} id={list.id} del={del}/>
          ))}
        </ul>
      </div>
  )
}
