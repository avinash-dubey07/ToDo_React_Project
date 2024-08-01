import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("ITEMS")) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("ITEMS", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
        localStorage.setItem("ITEMS", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("ITEMS", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;