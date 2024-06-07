import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemToCart,
  checkoutCart,
  getCart,
  removeItemFromCart,
  updateCartItem
} from "api/cart.api";
import { notify } from "components/ToastNotification";

const fetchCartThunk = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const cart = await getCart();
      return cart;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addItemThunk = createAsyncThunk(
  "cart/addItem",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const data = await addItemToCart({ productId, quantity });
      return data;
    } catch (error) {
      notify(
        "error",
        "Item could not be added to the cart. Please try again later."
      );
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk for removing an item from the cart
const removeItemThunk = createAsyncThunk(
  "cart/removeItem",
  async (itemId, { rejectWithValue }) => {
    try {
      const data = await removeItemFromCart(itemId);
      return data;
    } catch (error) {
      notify(
        "error",
        "Item could not be removed from the cart. Please try again later."
      );
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk for updating an item in the cart
const updateCartItemThunk = createAsyncThunk(
  "cart/updateCartItem",
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const data = await updateCartItem({ itemId, quantity });
      return data;
    } catch (error) {
      notify("error", "Item could not be updated. Please try again later.");
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk for checking out the cart
const checkoutCartThunk = createAsyncThunk(
  "cart/checkoutCart",
  async (_, { rejectWithValue }) => {
    try {
      const data = await checkoutCart();
      return data;
    } catch (error) {
      notify("error", "Cart could not be checked out. Please try again later.");
      return rejectWithValue(error.response.data);
    }
  }
);

export {
  fetchCartThunk,
  addItemThunk,
  removeItemThunk,
  updateCartItemThunk,
  checkoutCartThunk
};
