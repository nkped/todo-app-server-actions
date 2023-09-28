import React from 'react'
import Link from 'next/link'
import { deleteTodo } from '@/lib/actions'
import Checkbox from './Checkbox'
import { FaTrash } from 'react-icons/fa'

const Todo = (todo: Todo) => {
  console.log('this todo.title from Todo: ', todo.title)
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
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-300 hover:cursor-pointer hover:bg-red-400">
            <FaTrash />
        </button>

      </div>
    </form>
  )
}

export default Todo