import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import About from './components/About'

const HomePage = () => {
  return (
    <>
      <AddTodo />
      <h1>back to dev build</h1>
      <About />
      <TodoList />
    </>
  )
}

export default HomePage