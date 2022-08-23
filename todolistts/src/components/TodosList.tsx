import { useTodoContext } from '../hooks/useTodoContext'
import { TODOS_ACTIONS } from '../context/TodosContext'
import SingleTodo from './SingleTodo'
import {v4 as uuidv4} from 'uuid';
const TodosList = () => {
    const context=useTodoContext();
  const handleAddTodo=()=>{
      context?.dispatch({type:TODOS_ACTIONS.ADD,payload:'hello'})
  }
  return (
    <>
    <button style={{width:'500px',height:'200px',fontSize:'30px'}} onClick={handleAddTodo}>Add Todo</button>
    {context?.todos?.map(todo=>(
        <SingleTodo {...todo} key={uuidv4()}/>
    ))}
    </>
  )
}

export default TodosList