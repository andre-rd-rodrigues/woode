import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "api/auth.api";

export const fetchUserThunk = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUser();
      return user;
    } catch (error) {
      /*   localStorage.removeItem(process.env.REACT_APP_STORAGE_TOKEN_KEY); */
      return rejectWithValue(error.response.data);
    }
  }
);
