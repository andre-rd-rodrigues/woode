const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "notifications",
  initialState: {
    active: false,
    message: ""
  },
  reducers: {
    fireNotification: (state, { payload }) => {
      state.active = true;
      state.message = payload.message;
    },
    hideNotification: (state, action) => {
      state.active = false;
    }
  }
});

export const { fireNotification, hideNotification } = slice.actions;

export default slice.reducer;
