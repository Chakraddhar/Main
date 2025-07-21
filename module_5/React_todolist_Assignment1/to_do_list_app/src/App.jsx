import { useState } from 'react'
import Header from './components/Header';
import Todolist from './components/todolist';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <Header addTodo={addTodo} />
        <Todolist
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;

