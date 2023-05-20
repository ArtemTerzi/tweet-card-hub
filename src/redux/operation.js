import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6459420c8badff578e091b9d.mockapi.io/api/";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get("users", {
        params: { page, limit },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const handleFollow = createAsyncThunk(
  "users/follow",
  async (newData, thunkAPI) => {
    try {
      const response = await axios.put(`users/${newData.id}`, newData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const handleUnfollow = createAsyncThunk(
  "users/unfollow",
  async (newData, thunkAPI) => {
    try {
      const response = await axios.put(`users/${newData.id}`, newData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
