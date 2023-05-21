import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers, handleFollow, handleUnfollow } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { error: { message } }) => {
  state.error = `Something gone wrong, we think the problem is: ${message}.`;
  state.isLoading = false;
};

const updateUser = (state, { payload }) => {
  const updatedUser = payload;
  const userIndex = state.items.findIndex(user => user.id === updatedUser.id);
  if (userIndex !== -1) {
    state.items[userIndex] = updatedUser;
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addMatcher(
        isAnyOf(handleFollow.fulfilled, handleUnfollow.fulfilled),
        updateUser
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.pending,
          handleFollow.pending,
          handleUnfollow.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.rejected,
          handleFollow.rejected,
          handleUnfollow.rejected
        ),
        handleRejected
      );
  },
});

export const userReducer = usersSlice.reducer;
