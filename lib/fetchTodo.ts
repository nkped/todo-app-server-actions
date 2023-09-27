
const baseUrl = process.env.JSON_SERVER
console.log('this is baseurl: ', baseUrl)

export default async function fetchTodo(id: string) {
    const res = await fetch(`${baseUrl}/todos/${id}`)

    //if (!res.ok) return undefined

    const todo: Todo = await res.json()

    return todo
}



