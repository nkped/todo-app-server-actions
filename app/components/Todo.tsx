import React from 'react'
import Link from 'next/link'
import { deleteTodo } from '@/lib/action'
import Checkbox from './Checkbox'


const Todo = (todo: Todo) => {
  console.log('todos from Todo: ', todo)
  return (
    <form>
      <label htmlFor='completed'>
      <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>

      <div>
       <Checkbox todo={todo}/>

        <button 
          formAction={ async () => {
            'use server'
            await deleteTodo(todo)
          }}>DELETE
        </button>

      </div>
    </form>
  )
}

export default Todo