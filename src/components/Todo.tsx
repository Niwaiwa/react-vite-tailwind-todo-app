import React from 'react'
import { TodoData } from './TodoList'

type TodoInputData = {
  todos: TodoData[];
  completeTodo: (id: number)=>{};
}

function Todo({todos, completeTodo}: TodoInputData) {

  return todos.map((todo: TodoData, index: number) => {
      return <div
          className={todo.isComplete 
            ? 'todo-row complete' 
            : 'my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'}
          key={index}
        >
          <div 
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            >
            {todo.text}
          </div>
        </div>
  });
}

export default Todo