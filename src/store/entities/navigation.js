import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousRoute: null,
  currentRoute: null
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateRoute: (state, action) => {
      state.previousRoute = state.currentRoute;
      state.currentRoute = action.payload;
    }
  }
});

export const { updateRoute } = navigationSlice.actions;
export default navigationSlice.reducer;
