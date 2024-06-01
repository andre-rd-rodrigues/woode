import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const selectProductsState = (state) => ({
  isLoading: state.entities.products?.status === "loading",
  isError: state.entities.products?.status === "failed",
  isSuccess: state.entities.products?.status === "succeeded",
  items: state.entities.products?.items,
  error: state.entities.products?.error
});

export default productsSlice.reducer;
