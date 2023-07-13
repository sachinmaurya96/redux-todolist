import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constant";
const initialState = {
  todos: [],
  value:""
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.text],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos:state.todos.filter((elem,i)=>{
           return i !== action.payload.id
        })
      };
    case EDIT_TODO:
      return {
        ...state,
        todos:state.todos.map((elem,i)=>{
            if(i===action.payload.id){
                elem = action.payload.value
            }
            return elem
        })
      };

    default:
      return state;
  }
};

export default todoReducer;
