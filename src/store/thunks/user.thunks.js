import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "api/auth.api";

export const fetchUserThunk = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUser();
      return user;
    } catch (error) {
      localStorage.removeItem(process.env.REACT_APP_STORAGE_TOKEN_KEY);

      // Set session ID if not already set
      let sessionId = localStorage.getItem(
        process.env.REACT_APP_STORAGE_SESSION_ID_KEY
      );

      if (!sessionId) {
        sessionId = Date.now().toString();
        localStorage.setItem(
          process.env.REACT_APP_STORAGE_SESSION_ID_KEY,
          sessionId
        );
      }

      return rejectWithValue(error.response.data);
    }
  }
);
