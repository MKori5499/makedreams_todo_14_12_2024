import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem("todos")) || [];
console.log(initialState);

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos',JSON.stringify(state));
    },
    updateTodo: (state,action) => {
      const {id, updateTodo} =action.payload;
      const updateState = state.map((todo)=>todo.id === id ? {...todo, ...updateTodo} : todo);
      localStorage.setItem("todos", JSON.stringify(updateState));
      return updateState;
    },
    deleteTodo: (state, action) => {
        const updateState = state.filter((todo) => todo.id !== action.payload);
        localStorage.setItem("todos", JSON.stringify(updateState));
        return updateState; 
    },
    toggleComplete: (state, action) => {
        const updateState = state.map((todo)=>
        todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        localStorage.setItem("todos", JSON.stringify(updateState));
        return updateState; 
      },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer