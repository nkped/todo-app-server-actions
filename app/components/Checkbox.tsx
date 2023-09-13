'use client'

import React from 'react'
import { updateTodo } from '@/lib/action'
import { useTransition } from 'react'


const Checkbox = ({todo,}: {todo: Todo,}) => 
{
    const [ isPending, startTransition ] = useTransition()

  return (
    <div>
        <input 
            type='checkbox'
            checked={todo.completed}
            //id='completed' 
            name='completed'
            onChange={() => startTransition(() => updateTodo(todo))}
            disabled={isPending}
            />
     </div>
  )
}

export default Checkbox