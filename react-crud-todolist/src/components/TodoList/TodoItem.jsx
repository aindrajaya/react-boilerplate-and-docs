import React from 'react'

export default function TodoItem({item, id, del}) {
  return (
    <div className="todolists">
      {id} {item}
      <span onClick={() => del(id)}> X</span>
    </div>
  )
}
