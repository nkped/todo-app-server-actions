import React from 'react'
import Link from 'next/link'
import { deleteTodo } from '@/lib/action'


const Todo = (todo: Todo) => {
  return (
    <form>
      <Link href={`/edit/${todo.id}`}>{todo.title}</Link>

      <button 
        formAction={ async () => {
          'use server'
          await deleteTodo(todo)
          }}>
          DELETE</button>
    </form>
  )
}

export default Todo