import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../slices/todoSlice'
import './TodoForm.css' 

export default function TodoForm() {

  const dispatch = useDispatch();

  const handleSubmit =(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTodo = {
      id: Date.now(),
      title: formData.get('title'),
      description: formData.get('description'),
      dureDate: formData.get('dueDate'),
      tags: formData.get('tags'),
      priority: formData.get('priority'),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    
    e.target.reset();

  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input name='title' placeholder='Title' required />
      <textarea name='description' placeholder='Discription' />
      <input type='date' name='dueDate' required/>
      <input name='tags' placeholder='Tag' />
      <select name=' priority'>
        <option value="High"> High</option>
        <option value="Medium"> Medium</option>
        <option value="Low"> Low</option>
      </select>
      <button type='submit'> Add Todos </button>
    </form>
  )
}
