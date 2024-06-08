import { login, register } from "api/auth.api";
import { notify } from "components/ToastNotification";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (error) {
      notify("error", error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await register(credentials);
      return data;
    } catch (error) {
      notify("error", error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
