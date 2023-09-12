import React from 'react'
import { addTodo } from '@/lib/action'

const AddTodo = () => {

  return (
    <form action={addTodo}>
      <input 
        type='text' 
        name='title'
        placeholder='Next todo'    
        />

       <button type='submit'>Submit</button>

    </form>
  )
}

export default AddTodo