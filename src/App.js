import './App.css';
import TodoForm from './components/form/TodoForm';
import TodoList from './components/list/TodoList';

function App() {
  return (
    <div>
      <h1 className="header">To-Do App</h1>
      <TodoForm/>
      <TodoList/>
    
    </div>
  );
}

export default App;
