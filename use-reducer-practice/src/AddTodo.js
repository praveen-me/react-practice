import React, { useState } from 'react';

function AddTodo(props) {
  const [value, setValue] = useState('');
  const {dispatch} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default AddTodo;