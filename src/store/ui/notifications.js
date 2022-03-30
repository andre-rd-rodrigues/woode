const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "notifications",
  initialState: {
    topNotification: {
      active: false,
      message: ""
    },
    newsletterNotification: {
      active: false
    }
  },
  reducers: {
    fireNotification: ({ topNotification }, { payload }) => {
      topNotification.active = true;
      topNotification.message = payload.message;
    },
    hideNotification: ({ topNotification }) => {
      topNotification.active = false;
    },
    checkNewsletterNotification: ({ newsletterNotification }, { payload }) => {
      newsletterNotification.active = payload.checkValue;
      localStorage.setItem("notificationNewsletterActive", payload.checkValue);
    }
  }
});

export const {
  fireNotification,
  hideNotification,
  checkNewsletterNotification
} = slice.actions;

export default slice.reducer;
