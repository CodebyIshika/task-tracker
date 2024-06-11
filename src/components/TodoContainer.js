import React, { useEffect, useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  currentTask: { id: null, text: '' }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_TASK':
      return { ...state, currentTask: action.payload };
    case 'UPDATE_TASKS':
      localStorage.setItem('tasks', JSON.stringify(action.payload));
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}

function TodoContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addOrUpdateTodo = (text) => {
    const updatedTasks = state.currentTask.id ?
      state.tasks.map(task => task.id === state.currentTask.id ? { ...task, text } : task) :
      [...state.tasks, { id: Date.now(), text, completed: false, date: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }];
  
    dispatch({ type: 'UPDATE_TASKS', payload: updatedTasks });
  };
  

  const toggleComplete = (id) => {
    const toggledTasks = state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    dispatch({ type: 'UPDATE_TASKS', payload: toggledTasks });
  };

  const deleteTodo = (id) => {
    const filteredTasks = state.tasks.filter(task => task.id !== id);
    dispatch({ type: 'UPDATE_TASKS', payload: filteredTasks });
  };

  const editTodo = (id, text) => {
    dispatch({ type: 'SET_CURRENT_TASK', payload: { id, text } });
  };

  return (
    <div>
      <TodoForm 
        addOrUpdateTodo={addOrUpdateTodo} 
        currentTask={state.currentTask}
      />
      <TodoList 
        tasks={state.tasks} 
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoContainer;
