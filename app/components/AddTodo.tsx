import { addTodo } from '@/lib/actions'
import { AiOutlineArrowRight } from 'react-icons/ai'


const AddTodo = () => {
  let content = (

  <form action={addTodo} className="flex gap-2 items-center">
      <input 
        type='text' 
        name='title'
        placeholder='Add todo..' 
        className="text-2xl p-1 rounded-lg flex-grow w-full"
        autoFocus   
        />
       <button 
        type="submit" 
        className="p-2 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-green-400 hover:cursor-pointer hover:bg-green-400"
        >
          <AiOutlineArrowRight />
        </button>

    </form>
    )

      return content
}

export default AddTodo