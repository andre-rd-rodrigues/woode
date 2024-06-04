import { createSlice } from "@reduxjs/toolkit";

//Utils
const updateAmountTotal = (state) =>
  state.items.reduce(
    (prevValue, currentValue) => prevValue + currentValue.amount,
    0
  );
const isAlreadyAdded = (state, payload) => {
  const index = state.items.findIndex((item) => item.id === payload.item.id);
  return index >= 0 ? true : false;
};
const updatedTotalPrice = (state) =>
  state.items.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.amount * currentValue.price,
    0
  );

//Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    totalPrice: 0
  },
  reducers: {
    updateCart: (cart, { payload }) => {
      cart.items = payload.items;
      cart.amount = payload.amount;
      cart.totalPrice = payload.totalPrice;
    }
  }
});

export const { addedItem, updatedAmount, removedItem, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
