import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false
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
  }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
