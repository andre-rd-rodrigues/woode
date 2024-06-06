import { createSlice } from "@reduxjs/toolkit";
import {
  addItemThunk,
  checkoutCartThunk,
  fetchCartThunk,
  removeItemThunk,
  updateCartItemThunk
} from "store/thunks/cart.thunks";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    totalPrice: 0,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    updateCart: (cart, { payload }) => {
      const { items, amount, totalPrice } = payload.data;

      cart.items = items;
      cart.amount = amount;
      cart.totalPrice = totalPrice;
    },
    resetCart: (cart) => {
      cart.items = [];
      cart.amount = 0;
      cart.totalPrice = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data.items;
        state.amount = action.payload.data.amount;
        state.totalPrice = action.payload.data.totalPrice;
      })
      .addCase(fetchCartThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Add new item to cart
      .addCase(addItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { items, amount, totalPrice } = action.payload.data;
        state.items = items;
        state.amount = amount;
        state.totalPrice = totalPrice;
      })
      .addCase(addItemThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      }) // Remove item from cart
      .addCase(removeItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItemThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { items, amount, totalPrice } = action.payload.data;
        state.items = items;
        state.amount = amount;
        state.totalPrice = totalPrice;
      })
      .addCase(removeItemThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update item in cart
      .addCase(updateCartItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItemThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { items, amount, totalPrice } = action.payload.data;
        state.items = items;
        state.amount = amount;
        state.totalPrice = totalPrice;
      })
      .addCase(updateCartItemThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Checkout cart
      .addCase(checkoutCartThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkoutCartThunk.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = [];
        state.amount = 0;
        state.totalPrice = 0;
      })
      .addCase(checkoutCartThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

const selectCartState = (state) => ({
  isLoading: state.entities.cart?.status === "loading",
  isError: state.entities.cart?.status === "failed",
  isSuccess: state.entities.cart?.status === "succeeded",
  cart: state.entities.cart,
  error: state.entities.cart?.error
});

const { updateCart, resetCart } = cartSlice.actions;

export { addItemThunk, fetchCartThunk, resetCart, selectCartState, updateCart };

export default cartSlice.reducer;
