
//const baseUrl = process.env.NODE_ENV_JSON_SERVER
//console.log('this is baseurl: ', baseUrl)

export default async function fetchTodo(id: string) {
    
    const res = await fetch(`https://todo-json-server-9lpj.onrender.com/todos/${id}`)

    //if (!res.ok) return undefined

    const todo: Todo = await res.json()

    console.log('todo from todo: ', todo)

    return todo
}



