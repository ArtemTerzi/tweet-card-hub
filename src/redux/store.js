import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./usersSlice";

export const rootReducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
