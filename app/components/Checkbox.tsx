'use client'

import React from 'react'
import { updateTodo } from '@/lib/actions'
//import { useTransition } from 'react'
//import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { experimental_useOptimistic as useOptimistic } from 'react'


const Checkbox = ({todo,}: {todo: Todo,}) => 
{
    //const [ isPending, startTransition ] = useTransition()
    const [optimisticTodo, addOptimisticTodo] = useOptimistic(
        todo, (
            state: Todo,
            completed: boolean,
        ) => ({...state, completed})
    )

  return (
    <div>
        <input 
            type='checkbox'
            checked={optimisticTodo.completed}
            //id='completed' 
            name='completed'
            //onChange={() => startTransition(() => updateTodo(todo))}
            //disabled={isPending}
            onChange={ async () => {
                addOptimisticTodo(!todo.completed)
                await updateTodo(todo)
                }
            }
            />
     </div>
  )
}

export default Checkbox