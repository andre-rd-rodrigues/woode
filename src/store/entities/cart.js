import { createSlice } from "@reduxjs/toolkit";

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
      const { items, amount, totalPrice } = payload.data;

      cart.items = items;
      cart.amount = amount;
      cart.totalPrice = totalPrice;
    }
  }
});

export const { addedItem, updatedAmount, removedItem, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
