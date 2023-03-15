import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue!== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleTodoDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
      <div className="App">
        <div className="container">
        <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit} className="frm">
        <input
          type="text"
          placeholder="Add a todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className='unli'> 
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <img src="delete.jpg" onClick={() => handleTodoDelete(index)}/>
          </li>
        ))}
      </ul>
        </div>
      </div>
       );
}

export default App;
