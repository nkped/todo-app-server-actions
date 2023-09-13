import React from 'react'
import fetchTodo from '@/lib/fetchTodo'
import Todo from '@/app/components/Todo'



type Props = {
  params: {
      id: string
  }
}

export default async function page({ params: { id } }: Props) {

  const todo = await fetchTodo(id)

  console.log('hello from edit todo', todo)

  

  return (
    <>
      <Todo {...todo} />
    </>
  )
}