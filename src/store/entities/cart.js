import { createSlice, current } from "@reduxjs/toolkit";

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

//Slice
const slice = createSlice({
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
      //Update cart amount
      cart.amount = updateAmountTotal(cart);
    },
    updatedItemAmount: (cart, { payload }) => {
      const index = cart.items.findIndex((item) => item.id === payload.id);
      return payload.amount >= 0 && cart.items[index].amount;
    }
  }
});

export const { addedItem, updatedItemAmount } = slice.actions;

export default slice.reducer;
