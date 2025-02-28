import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Todo } from './types/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  }
  return (
    <main className='max-w-6xl mx-auto my-10'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </main>
  )
}

export default App
