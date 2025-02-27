import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const todos = [{id : "D1", text : "Complete TypesScript in 2 Hours"}]
  return (
    <main className='max-w-6xl mx-auto'>
      <AddTodo/>
      <TodoList items ={todos}/>
    </main>
  )
}

export default App
