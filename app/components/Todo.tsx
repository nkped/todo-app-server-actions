import React from 'react'
import Link from 'next/link'
import { deleteTodo } from '@/lib/actions'
import Checkbox from './Checkbox'


const Todo = (todo: Todo) => {
  console.log('todos from Todo: ', todo)
  return (
    <form className="my-4 flex justify-between items-center">
      <label htmlFor='completed' className="text-2xl hover:underline">
      <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>

      <div className="flex items-center gap-4">
       <Checkbox todo={todo}/>

        <button 
          formAction={ async () => {
            'use server'
            await deleteTodo(todo)
          }}
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-300 hover:cursor-pointer hover:bg-red-400">DEL
        </button>

      </div>
    </form>
  )
}

export default Todo