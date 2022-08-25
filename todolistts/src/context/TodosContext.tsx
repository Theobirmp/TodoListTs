import { useReducer } from "react";
import { createContext } from "react";
import { Todo } from "../types/todo";

export enum TODOS_ACTIONS{
    ADD='ADD_TODO',
    REMOVE='REMOVE_TODO',
    UPDATE='UPDATE_TODO',
    GET_ALL='GET_ALL',
    TODO_DONE='TODO_DONE',
    EDIT='EDIT',
    CANCEL_EDIT='CANCEL_EDIT',
}
type ContextProps={
    children:React.ReactNode;
}
export type TodosContextType={
    todos:Todo[];
    dispatch:React.Dispatch<ActionType>;
}
const initialState:Todo[] =[];
interface GetAction{
    type:TODOS_ACTIONS.GET_ALL;
    payload?:null;
}
interface AddAction{
    type:TODOS_ACTIONS.ADD;
    payload:string;
}
interface RemoveAction{
    type:TODOS_ACTIONS.REMOVE;
    payload:number;
}
interface DoneTodo{
    type:TODOS_ACTIONS.TODO_DONE;
    payload:number;
}
interface UpdateAction{
    type:TODOS_ACTIONS.UPDATE;
    payload:{
        id:number;
        context:string;
    };
}
interface EditAction{
    type:TODOS_ACTIONS.EDIT;
    payload:number;
}
interface CancelEditACtion{
    type:TODOS_ACTIONS.CANCEL_EDIT;
    payload:number;
}
type ActionType = AddAction | RemoveAction | UpdateAction  | GetAction | DoneTodo | EditAction | CancelEditACtion;
export const TodosContext=createContext<TodosContextType | null>(null)

export function todosReducer(state:Todo[],action:ActionType){
    const {type,payload}=action
    switch (type) {
        case TODOS_ACTIONS.ADD:
            return [...state,{name1:payload,isDone:false,id:Date.now(),isEdit:false}];
        case TODOS_ACTIONS.REMOVE:
            const removeState=state.filter(todo=>todo.id!=payload)
            return removeState
        case TODOS_ACTIONS.GET_ALL:
            return state
        case TODOS_ACTIONS.UPDATE:
            const updateState=state.map(todo=>(todo.id==payload.id?({...todo,name1:payload.context}):(todo)))
            return updateState
        case TODOS_ACTIONS.TODO_DONE:
            const doneState=state.map(todo=>todo.id===payload?({...todo,isDone:!todo.isDone}):(todo))
            return doneState
        case TODOS_ACTIONS.EDIT:
            const editState=state.map(todo=>todo.id===payload?({...todo,isEdit:true}):(todo))
            return editState
            case TODOS_ACTIONS.CANCEL_EDIT:
                const cancelEditState=state.map(todo=>todo.id===payload?({...todo,isEdit:false}):(todo))
                return cancelEditState
        default:
            return state;
    }
}




export const TodosProvider=({children}:(ContextProps))=>{   
    const [todos, dispatch] = useReducer(todosReducer,initialState);
    return (
        <TodosContext.Provider value={{todos,dispatch}}>
        {children}
    </TodosContext.Provider>
    )
}