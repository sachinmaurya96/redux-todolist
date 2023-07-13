import { ADD_TODO,EDIT_TODO,DELETE_TODO } from "./constant";
export const addTodo = (text) => {
    return {
      type:ADD_TODO,
      payload: {
        text,
      },
    };
  };
  
  export const removeTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: {
        id,
      },
    };
  };

  export const editTodo = (id,value) => {
    return {
      type: EDIT_TODO,
      payload: {
        id,
        value
      },
    };
  };
  