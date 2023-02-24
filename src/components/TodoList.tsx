import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

export type TodoData = {
  id: number;
  text: string;
  isComplete: boolean;
};

function TodoList() {
  const [todos, setTodos] = useState<TodoData[]>([]);
  
  const addTodo = (todo: TodoData) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }
    const newTodos: TodoData[] = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  }

  const completeTodo = id => {
    console.log(id);
  }

  return (
    <div>
        <h1 className='text-3xl'>What's plan for today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
        >
        </Todo>
    </div>
  )
}

export default TodoList;