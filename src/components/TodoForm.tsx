import React, { useState } from 'react'

const TodoForm = (props: any) => {
  const [input, setInput] = useState('');
  
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setInput("");
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Add a todo'
        value={input}
        name="text"
        className='todo-input'
        onChange={handleChange}
        />
        <button className="px-6 py-2 text-sm rounded shadow bg-slate-100 hover:bg-slate-200 text-slate-500">Add todo</button>
    </form>
  )
}

export default TodoForm