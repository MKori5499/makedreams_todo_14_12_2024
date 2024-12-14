import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {

  const todos = useSelector((state) => state.todos)
  
  return (
    <div>
      {todos.length > 0 ?(
        todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
      ) :
      (
        <p> No todos found</p>
      )}
    </div>
  )
}
