import React from 'react';
import './ToDoItem.css';

function ToDoItem({
  todo,
  toggleComplete,
  deleteTodo,
  startEdit,
  isEditing,
  editText,
  setEditText,
  saveEdit,
}) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-section">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => saveEdit(todo.id)}><i className="fas fa-check"></i></button>
        </div>
      ) : (
        <div className="view-section">
          <button className="complete-button" onClick={() => toggleComplete(todo.id)}>
            <i className={`fas fa-check ${todo.completed ? 'completed-icon' : ''}`}></i>
          </button>
          <span className={todo.completed ? 'completed-text' : ''}>{todo.text}</span>
          <div className="actions">
            <button onClick={() => startEdit(todo)}><i className="fas fa-edit"></i></button>
            <button onClick={() => deleteTodo(todo.id)}><i className="fas fa-trash"></i></button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ToDoItem;