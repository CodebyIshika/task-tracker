import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
