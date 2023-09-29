'use server'
import { revalidatePath } from "next/cache"

const baseUrl = process.env.BASE_URL


export async function addTodo(data: FormData) {
    
    console.log('this is baseUrl from addtodo actions: ', baseUrl)
    
    const title = data.get('title')
    console.log('this is data from actions addTodo: ', data)

    await fetch(`${baseUrl}`, {
        method: 'POST',        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, completed: false})        
    })

    revalidatePath('/')
}


export async function deleteTodo(todo: Todo) {

   //const baseUrl = process.env.BASE_URL
    console.log('this is baseUrl from delete actions: ', baseUrl)
    
    await fetch(`${baseUrl}/${todo.id}`, {
        method: 'DELETE'
    })
    
    revalidatePath('/')
}



export async function updateTodo(todo: Todo) {

    //const baseUrl = process.env.BASE_URL
    console.log('this is baseUrl from update actions: ', baseUrl)
    
    const res = await fetch(`${baseUrl}/${todo.id}`    
    , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todo, completed: !todo.completed
        })
    })

    await res.json()
    revalidatePath('/')
    }