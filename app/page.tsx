import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


const HomePage = () => {
  return (
    <main>
      <AddTodo />
      <TodoList />
    </main>
  )
}

export default HomePage