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
    setTodos(newTodos);
  }

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const updateTodo = (id: number, newText: string) => {
    if (!newText || /^\s*$/.test(newText)) {
      return;
    }
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
          todo.text = newText;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    let updatedTodos = todos.filter(todo => {
      return todo.id != id;
    })
    setTodos(updatedTodos);
  }

  return (
    // <div className='space-y-4'>
    <div>
        <h1 className='text-3xl'>What's plan for today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        >
        </Todo>
    </div>
  )
}

export default TodoList;