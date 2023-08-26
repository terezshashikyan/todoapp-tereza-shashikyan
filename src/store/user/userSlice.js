import { createSlice } from "@reduxjs/toolkit";
import { initialUser } from "./initialState";


export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,

  reducers: {
    setTodosList(state, action) {
      state.todosList = action.payload;
    },

   
    createTodo (state, action) {
      const newTodosList = [...state.todosList, action.payload];
      state.todosList = newTodosList;
    },

    deleteTodo (state, action)  {
      state.todosList = state.todosList.filter((todo) => todo.id !== action.payload.id);
    },

    updateTodo (state, action)  {
     state.todosList.filter((todo) => todo.id === action.payload.id)[0] = action.payload;

    },

  },

});

export const { setTodosList} = userSlice.actions;
