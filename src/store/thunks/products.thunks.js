import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "api/products.api";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await getProducts();
      return products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
