import React from 'react'
import { TodoData } from './TodoList'

type TodoInputData = {
  todos: TodoData[];
  completeTodo: (id: number)=>void;
  deleteTodo: (id: number)=>void;
  updateTodo: (id: number)=>void;
}

function Todo({todos, completeTodo, deleteTodo, updateTodo}: TodoInputData) {

  return todos.map((todo: TodoData, index: number) => {
      return <div
          className={todo.isComplete 
            ? 'my-1 bg-gray-700 hover:bg-gray-500 text-white font-bold py-3 px-4 flex space-x-4 rounded-md'
            : 'my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 flex space-x-4 rounded-md'}
          key={index}
        >
          <div 
            className='basis-4/6'
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            >
            {todo.text}
          </div>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Add todo</button> */}
          <button 
            className='bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => updateTodo(todo.id)}
            >
            update
          </button>
          <button 
            className='bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => deleteTodo(todo.id)}
            >
            delete
          </button>
        </div>
  });
}

export default Todo