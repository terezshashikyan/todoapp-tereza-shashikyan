import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./user";


export const reducers = () =>
  combineReducers({
    user: userSlice.reducer,
  });
