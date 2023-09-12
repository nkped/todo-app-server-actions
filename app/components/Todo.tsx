import React from 'react'
import Link from 'next/link'



const Todo = (todo: Todo) => {
  return (
    <div>
      <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
    </div>
  )
}

export default Todo