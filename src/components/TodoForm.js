import React, { useState, useEffect } from 'react';

function TodoForm({ addOrUpdateTodo, currentTask }) {
  const [value, setValue] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Add Task");

  useEffect(() => {
    if (currentTask.id) {
      setValue(currentTask.text);
      setButtonLabel("Update");
    } else {
      setValue("");
      setButtonLabel("Add Task");
    }
  }, [currentTask]);

  const handleSubmit = e => {
    e.preventDefault();
    addOrUpdateTodo(value);
    setValue("");
    setButtonLabel("Add Task"); 
  };

  return (
    <form className='TodoForm flex' onSubmit={handleSubmit}>
      <h1>Task Tracker</h1>
      <div className='input flex'>
        <input
          type='text'
          className='todo-input'
          value={value}
          placeholder='What is the task today?'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
