import { fetchTodos } from '@/lib/fetchTodos'
import Todo from './Todo'

const TodoList = async () => {

  const todos = await fetchTodos()

  let content

  if (!todos || todos.length === 0 ) {

    content = (<p>Sorry, no todos available..</p>)
  }
  else {
    content = (
      <>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </>
    )
  }

  return content 

}

export default TodoList