import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import About from './components/About'

const HomePage = () => {
  return (
    <>
      <AddTodo />
      <About />
      <TodoList />
    </>
  )
}

export default HomePage