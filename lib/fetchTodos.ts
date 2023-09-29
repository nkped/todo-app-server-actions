

export async function fetchTodos() {
    
    const baseUrl = process.env.BASE_URL
    console.log('this is baseUrl from fetchTodofunction: ', baseUrl)
    

    /*
    const res = await fetch('http://localhost:3500/todos')
    
    const res = await fetch('https://todo-json-server-9lpj.onrender.com/todos', {
        next: { revalidate: 0 } })
        */
       
       try {
           
        const res = await fetch(`${baseUrl}`, {
            next: { revalidate: 0 } })

        const todos: Todo[] = await res.json()
        return todos
        
    } catch (err) {
        if (err instanceof Error) console.log('this is err message from the fetchTodos', err.message)
        }
}