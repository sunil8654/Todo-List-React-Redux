import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoSlice';
import './AddTodoForm.css';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
