import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({
  todos,
  toggleComplete,
  deleteTodo,
  startEdit,
  editingId,
  editText,
  setEditText,
  saveEdit,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
          isEditing={editingId === todo.id}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;