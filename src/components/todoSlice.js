import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, editTodo, getTodo } from "./todoAPI";
const initialState = {
  todos: [],
  status: "idle",
};
export const fetchTodoAsync = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await getTodo();
  return response.data;
});

export const addTodoAsync = createAsyncThunk(
  "todo/addTodoAsync",
  async (value) => {
    const response = await addTodo(value);
    return response.data;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodoAsync",
  async (id) => {
    const response = await deleteTodo(id);
    return response.data;
  }
);

export const editTodoAsync = createAsyncThunk(
  "todo/editTodo",
  async (update) => {
    const response = await editTodo(update);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodoAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        const index = state.todos.findIndex(item=>item.id===action.payload.id)
        state.todos.splice(index,1)
      })
      .addCase(editTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        const index = state.todos.findIndex(item=>item.id===action.payload.id)
        state.todos[index] = action.payload
      });
  },
});

export const selectTodo = (state) => state.todo.todos;

export default counterSlice.reducer;
