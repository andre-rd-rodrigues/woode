import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "store/thunks/auth.thunks";
import { fetchUserThunk } from "store/thunks/user.thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";

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
      }) // Login
      .addCase(loginThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = "succeeded";

        const { user, token } = action.payload;
        state.user = user;
        state.isAuthenticated = true;

        localStorage.setItem(
          process.env.REACT_APP_STORAGE_TOKEN_KEY,
          JSON.stringify(token)
        );
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const selectAuthState = (state) => ({
  isLoading: state.entities.auth?.status === "loading",
  isError: state.entities.auth?.status === "failed",
  isSuccess: state.entities.auth?.status === "succeeded",
  user: state.entities.auth?.user,
  error: state.entities.auth?.error
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
