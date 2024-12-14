import './App.css';
import TodoForm from './components/form/TodoForm';
import TodoItem from './components/list/TodoItem';
import TodoList from './components/list/TodoList';

function App() {
  return (
    <div>
      <h3>Todo </h3>
      <TodoForm/>
      <TodoList/>
    
    </div>
  );
}

export default App;
