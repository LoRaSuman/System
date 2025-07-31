import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Business means buying and selling',

'It solves people’s problems',

'The goal is to earn profit',

'It needs a product or service',
  ]);

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleSort = () => {
    const sortedTodos = [...todos].sort((a, b) => a.localeCompare(b));
    setTodos(sortedTodos);
  };

  return (
    <div className="app-container">
      <h1>Simple Todos</h1>
      <button className="sort-btn" onClick={handleSort}>Sort A-Z</button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
