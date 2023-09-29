'use server'

import { revalidatePath } from "next/cache"

//const baseUrl = process.env.JSON_SERVER

export async function addTodo(data: FormData) {
        
    const title = data.get('title')

    console.log('this is data from actions addTodo: ', data)

    await fetch(`https://todo-json-server-9lpj.onrender.com/todos`, {
        method: 'POST',        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, completed: false})        
    })

    revalidatePath('/')
}


export async function deleteTodo(todo: Todo) {

    await fetch(`https://todo-json-server-9lpj.onrender.com/todos/${todo.id}`, {
    method: 'DELETE'
    })

    revalidatePath('/')
}



export async function updateTodo(todo: Todo) {/* 
    console.log('todo from actions', todo)
    console.log('this is typeof todo: ', typeof(todo)) */
    //const res = await fetch(`http://localhost:3500/todos/${todo.id}`
    
    
    const res = await fetch(`https://todo-json-server-9lpj.onrender.com/todos/${todo.id}`    
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