import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'All',
  reducers: {
    ChangeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { ChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
