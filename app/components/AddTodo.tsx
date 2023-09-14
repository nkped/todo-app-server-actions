
import React from 'react'
import { addTodo } from '@/lib/actions'

const AddTodo = () => {
  let content = (

  <form action={addTodo}>
      <input 
        type='text' 
        name='title'
        placeholder='Next todo'    
        />

       <button type="submit">Submit</button>

    </form>)

      return content
}

export default AddTodo