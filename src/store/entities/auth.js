import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "api/auth.api";
import { updateCart } from "./cart";
import { store } from "index";

export const fetchUserThunk = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUser();
      store.dispatch(updateCart({ data: user.cart }));
      return user;
    } catch (error) {
      /*   localStorage.removeItem(process.env.REACT_APP_STORAGE_TOKEN_KEY); */
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.isAuthenticated = true;

      localStorage.setItem(
        process.env.REACT_APP_STORAGE_TOKEN_KEY,
        JSON.stringify(token)
      );
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.setItem(
        process.env.REACT_APP_STORAGE_TOKEN_KEY,
        JSON.stringify(null)
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const selectUserState = (state) => ({
  isLoading: state.auth?.status === "loading",
  isError: state.auth?.status === "failed",
  isSuccess: state.auth?.status === "succeeded",
  user: state.auth.user,
  error: state.auth?.error
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
