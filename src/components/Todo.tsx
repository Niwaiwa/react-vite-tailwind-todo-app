import React from 'react'
import { TodoData } from './TodoList'

type TodoInputData = {
  todos: TodoData[];
  completeTodo: (id: number)=>{};
}

function Todo({todos, completeTodo}: TodoInputData) {

  return todos.map((todo: TodoData, index: number) => {
      return <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
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