import React, { useState } from 'react'
import { Todo } from '../types/todo'
import { useTodoContext } from '../hooks/useTodoContext'
import { TODOS_ACTIONS } from '../context/TodosContext'
const SingleTodo = (todo:Todo) => {
    const context=useTodoContext()
    const handleRemove=(id:number)=>{
        context?.dispatch({type:TODOS_ACTIONS.REMOVE,payload:id})
    }
    const handleEnableEditing=(id:number)=>{
        // setEnableEdit(enableEdit=>!enableEdit)
        context?.dispatch({type:TODOS_ACTIONS.EDIT,payload:id})
    }
    const [enableEdit,setEnableEdit]=useState<boolean>(false)
    const [inputValue,setInputValue]=useState<string>(todo.name1)
    const handleInputChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }
    const handleSubmitChange=(e:any,id:number)=>{
        context?.dispatch({type:TODOS_ACTIONS.UPDATE,payload:{id,context:inputValue}})
        context?.dispatch({type:TODOS_ACTIONS.CANCEL_EDIT,payload:id})
        
    }
    const handleMarkAsDone=(e:any,id:number)=>{
        context?.dispatch({type:TODOS_ACTIONS.TODO_DONE,payload:id})
    }
    const handleCancelEdit=(id:number)=>{
        context?.dispatch({type:TODOS_ACTIONS.CANCEL_EDIT,payload:id})
        setInputValue(todo.name1)
    }
  return (
    <>
        <div style={{display:'flex'}}>
            <input disabled={!todo.isEdit} type="text" value={inputValue} onChange={handleInputChange}/>
            <button onClick={()=>handleRemove(todo.id)}>remove</button>
            <button onClick={()=>handleEnableEditing(todo.id)}>enable editing</button>
            <button onClick={(e)=>handleSubmitChange(e,todo.id)}>Submit Change</button>
            <button onClick={(e)=>handleMarkAsDone(e,todo.id)}>mark as done</button>
            <button onClick={()=>handleCancelEdit(todo.id)}>Cancel Edit</button>

        </div>
    </>
  )
}

export default SingleTodo