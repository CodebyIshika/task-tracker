import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task, toggleComplete, deleteTodo, editTodo }) {
  const handleComplete = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  const handleEdit = () => {
    editTodo(task.id, task.text);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="vertical-line" style={{ backgroundColor: task.completed ? '#33ab4e' : '#7b0fff' }}></div>
      <div className="task-top-row">
        <span onClick={handleComplete} >
          {task.text}
        </span>
      </div>
      <div className="details">
        <div className="date-time">{task.date}</div>
        <div className="icons">
          <span className="icon" onClick={handleComplete}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className="icon" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span className="icon" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
