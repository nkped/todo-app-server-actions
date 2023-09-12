

export async function fetchTodos() {
    try {
        const res = await fetch('http://localhost:3500/todos', {next: {revalidate: 0}})
        const todos: Todo[] = await res.json()
        return todos
        
    } catch (err) {
        if (err instanceof Error) console.log('this is err message from the fetchTodos', err.message)

        }
}