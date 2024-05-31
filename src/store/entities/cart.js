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
    addedItem: (cart, { payload }) => {
      if (isAlreadyAdded(cart, payload)) {
        const index = cart.items.findIndex(
          (item) => item.id === payload.item.id
        );
        cart.items[index].amount += payload.item.amount;
      } else {
        cart.items.push(payload.item);
      }
      //Update cart amount & total
      cart.amount = updateAmountTotal(cart);
      cart.totalPrice = updatedTotalPrice(cart);
    },
    updatedAmount: (cart, { payload }) => {
      const index = cart.items.findIndex((item) => item.id === payload.id);
      if (payload.amount >= 0) {
        cart.items[index].amount = payload.amount;
        //Update cart amount & total
        cart.amount = updateAmountTotal(cart);
        cart.totalPrice = updatedTotalPrice(cart);
      }
    },
    removedItem: (cart, { payload }) => {
      const index = cart.items.findIndex((item) => item.id === payload.id);
      cart.items.splice(index, 1);
      //Update cart amount & total
      cart.amount = updateAmountTotal(cart);
      cart.totalPrice = updatedTotalPrice(cart);
    },
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
