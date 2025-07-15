import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="app-container">
      <Header />
      <div className="input-section">
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEdit={startEdit}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />
    </div>
  );
}

export default App;