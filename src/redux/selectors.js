export const selectUsers = (state) => state.users.items;

export const selectLoadingStatus = (state) => state.users.isLoading;

export const selectErrorStatus = (state) => state.users.error;
