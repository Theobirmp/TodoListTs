import React, { useState } from 'react'
import { useTodoContext } from '../hooks/useTodoContext'
import { TODOS_ACTIONS } from '../context/TodosContext'
import '../css/disabledInput.css'
const TodoInput = () => {
    const context=useTodoContext()
    const [input,setInput]=useState<string>('')
    const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setInput(e.currentTarget.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLElement>)=>{
        e.preventDefault()
        context?.dispatch({type:TODOS_ACTIONS.ADD,payload:input})
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoInput