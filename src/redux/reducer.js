import { ADD_TASK, ADD_TODO, CLEAR_COMPLETED, DELETE_TODO, EDIT_TODO, TOGGLE_THEME, UPDATE_TODO } from "./types"

let initialState={
    theme:"dark",
    todos:[]
}

export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        default:{
            return state
        }
        case ADD_TODO:{
           
            return {
                ...state,todos:[...state.todos,payload]
            }
        }
        case DELETE_TODO:{
            const filteredTodos=state.todos.filter(todo=>todo.id!==payload.id)
            return {
                ...state,
                todos: filteredTodos
            }
        }
      case EDIT_TODO:{
        const editedTodos=state.todos.map((todo)=>{
            if(todo.id==payload.id){
                return {
                    ...todo,
                    title:payload.title
                }
            }
            return todo
        })
        console.log(payload)
        return {
            ...state,
            todos:editedTodos
        }
      }
      case UPDATE_TODO:{
        const updatedTodos=state.todos.map((todo)=>{
            if(todo.id===payload.id){
                return {
                    ...todo,
                    status:!todo.status
                }
            }
            return todo
        })
        return {
            ...state,todos:updatedTodos
        }
    
      }
      case CLEAR_COMPLETED:{
        const updatedTodos=state.todos.filter((todo)=>todo.status==false)
        console.log(updatedTodos)
        return {
            ...state,todos:updatedTodos
        }
      }
      case TOGGLE_THEME:{
        const newTheme=state.theme=='dark'?"light":"dark"
        return {
            ...state,theme:newTheme
        }
      }
      case ADD_TASK:{
        const updatedTodos=state.todos.map((todo)=>{
            if(todo.id==payload.id){
                return {
                    ...todo,
                    tasks:[...todo.tasks,payload.task]
                }
            }
            return todo
        })
        return {
            ...state,todos:updatedTodos
        }
      }
    
    
    }
}