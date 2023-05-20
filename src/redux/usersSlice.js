import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, handleFollow, handleUnfollow } from "./operation";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePendidng = (state) => {
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
  const userIndex = state.items.findIndex((user) => user.id === updatedUser.id);
  if (userIndex !== -1) {
    state.items[userIndex] = updatedUser;
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addCase(fetchUsers.pending, handlePendidng)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(handleFollow.fulfilled, updateUser)
      .addCase(handleUnfollow.fulfilled, updateUser);
  },
});

export const userReducer = usersSlice.reducer;
