'use client'

import React from 'react'
import { updateTodo } from '@/lib/actions'
//import { useTransition } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { experimental_useOptimistic as useOptimistic } from 'react'


const Checkbox = ({todo,}: {todo: Todo,}) =>
{
    console.log('this is todo from checkbox', todo)
    //const [ isPending, startTransition ] = useTransition()
    const {pending} = useFormStatus()
    const [optimisticTodo, addOptimisticTodo] = useOptimistic(
        todo, (
            state: Todo,
            completed: boolean,
        ) => ({...state, completed})
    )

  return (
        <input 
            type='checkbox'
            checked={optimisticTodo.completed}
            id='completed' 
            name='completed'
            className="min-w-[2rem] min-h-[2rem]"
            //onChange={() => startTransition(() => updateTodo(todo))}
            disabled={pending}
             onChange={ async () => {
                addOptimisticTodo(!todo.completed)
                await updateTodo(todo)
                }
            }
            />
  )
}

export default Checkbox