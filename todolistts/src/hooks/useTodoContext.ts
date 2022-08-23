import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { TodosContextType } from "../context/TodosContext";


export function useTodoContext():TodosContextType | null | undefined{
    const context=useContext(TodosContext)
    if(context) return context
    return undefined
}