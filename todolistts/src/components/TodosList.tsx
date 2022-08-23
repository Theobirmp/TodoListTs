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
    {context?.todos?.map(todo=>(
        <SingleTodo {...todo} key={uuidv4()}/>
    ))}
    </>
  )
}

export default TodosList