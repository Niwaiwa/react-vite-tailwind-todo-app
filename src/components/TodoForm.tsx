import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props: any) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus()
  //   }
  // })
  
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
    })
    setInput("");
  };

  return (
    <form 
      className='my-4'
      onSubmit={handleSubmit}>
      {props.edit ?
        (
        <>
        <input
        type="text"
        placeholder='update a todo'
        value={input}
        name="text"
        className='rounded-l-lg py-2 p-4 mr-0 border-t border-b border-l text-gray-800 border-gray-200 bg-white'
        onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Update</button>
        </>)
        :
        (
        <>
        <input
        type="text"
        placeholder='Add a todo'
        value={input}
        name="text"
        className='rounded-l-lg py-2 p-4 mr-0 border-t border-b border-l text-gray-800 border-gray-200 bg-white'
        onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Add todo</button>
        </>)
      }
    </form>
  )
}

export default TodoForm