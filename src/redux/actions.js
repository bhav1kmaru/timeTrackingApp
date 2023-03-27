import { ADD_TASK, ADD_TODO, CLEAR_COMPLETED, DELETE_TODO, EDIT_TODO, TOGGLE_THEME, UPDATE_TODO } from "./types";

export const handleAdd = (title)=>(dispatch) => {
  const newTodo = {
    id: Date.now(),
    title: title,
    status: false,
    tasks:[]
  };
  console.log(newTodo);
  dispatch({ type: ADD_TODO, payload: newTodo });
};

export const handleChange = (id)=>(dispatch) => {
  dispatch({ type: UPDATE_TODO, payload: { id } });
 
};
export const handleEdit = (id, title)=>(dispatch) => {
  dispatch({ type: EDIT_TODO, payload: { id: id, title: title } });
 
};
export const handleDelete = (id)=>(dispatch) => {
  dispatch({ type: DELETE_TODO, payload: { id: id } });
  // setTodos(store.getState().todos)
};

export const clearCompleted = ()=>(dispatch) => {
  dispatch({ type: CLEAR_COMPLETED });
 
};
export const handleTheme = ()=>(dispatch) => {
  dispatch({ type: TOGGLE_THEME });
};

export const addTask=(id,task)=>(dispatch) => {
    dispatch({type:ADD_TASK,payload: { id: id, task: task}})
}
