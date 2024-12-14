import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../../slices/todoSlice'


export default function TodoItem({todo}) {
    console.log(todo.title);
    

    const dispatch = useDispatch();

  return (
    <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>{todo.dueDate}</p>
        <p>{todo.tags}</p>
        <p>{todo.priority}</p>
        <p>Complete : {todo.completed ? "YES" : "NO"}</p>
        <button onClick={()=> dispatch(toggleComplete(todo.id))}>
            {todo.completed ? "Incomplete" : "Complete"}
        </button>
        <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  )
}
