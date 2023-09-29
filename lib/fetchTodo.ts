






export default async function fetchTodo(id: string) {
    
    const baseUrl = process.env.BASE_URL
    console.log('this is baseUrl from fetchTodo: ', baseUrl)
    
    const res = await fetch(`${baseUrl}/${id}`)
    

    //if (!res.ok) return undefined

    const todo: Todo = await res.json()

    console.log('todo from todo: ', todo)

    return todo
}



