import React from 'react'
import { useSelector} from 'react-redux'
import TodoItem from './TodoItem'
import './TodoList.css'

export default function TodoList() {

  const todos = useSelector((state) => state.todos)
  
  return (
    <div className="todo-list">
      {todos.length > 0 ?(
        todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
      ) :
      (
        <p> No todos found</p>
      )}
    </div>
  )
}
