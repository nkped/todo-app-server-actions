'use server'

import { revalidatePath } from "next/cache"

const baseUrl = process.env.JSON_SERVER

export async function addTodo(data: FormData) {
        
    const title = data.get('title')

    await fetch(`${baseUrl}/todos`, {
        method: 'POST',        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: 1, title, completed: false})        
    })

    revalidatePath('/')
}


export async function deleteTodo(todo: Todo) {

    await fetch(`${baseUrl}/todos/${todo.id}`, {
    method: 'DELETE'
    })

    revalidatePath('/')
}



export async function updateTodo(
    todo: Todo
) {
    const res = await fetch(`http://localhost:3500/todos/${todo.id}`, {
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