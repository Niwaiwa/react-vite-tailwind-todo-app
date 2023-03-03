import React, { useState } from 'react'
import { TodoData } from './TodoList'
import TodoForm from './TodoForm'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

type TodoInputData = {
  todos: TodoData[];
  completeTodo: (id: number)=>void;
  deleteTodo: (id: number)=>void;
  updateTodo: (id: number, value: string)=>void;
}

export type editData = {
  id: number | null;
  value: string;
};

function Todo({todos, completeTodo, deleteTodo, updateTodo}: TodoInputData) {
  const [edit, setEdit] = useState<editData>({
    id: null,
    value: ''
  });

  const submitUpdate = (value: any) => {
    if (edit.id) {
      updateTodo(edit.id, value.text);
    }
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

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
          {/* <button 
            className='bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            >
            update
          </button> */}
          {/* <button 
            className='bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => deleteTodo(todo.id)}
            >
            delete
          </button> */}
          <PencilSquareIcon 
            className='h-8 w-8 bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => setEdit({id: todo.id, value: todo.text})}
          />
          <TrashIcon 
            className='h-8 w-8 bg-sky-500 hover:bg-sky-700 basis-1/6 rounded-md py-1 px-2'
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
  });
}

export default Todo