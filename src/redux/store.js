import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './usersSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  users: userReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
