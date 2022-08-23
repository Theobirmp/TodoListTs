import './App.css'
import Home from './pages/Home'
import { useTodoContext } from './hooks/useTodoContext'
import { TODOS_ACTIONS } from './context/TodosContext'
import { Todo } from './types/todo'

const App:React.FC = () =>{  
    const context=useTodoContext()
    const allTodos:Todo[]=context?.dispatch({type:TODOS_ACTIONS.GET_ALL})
  const getAllTodos=()=>{
    console.log(allTodos)
  }
  return (
    <>
    <Home/>
    <button onClick={getAllTodos}>Get All Todos</button>
    </>
  )
}

export default App
