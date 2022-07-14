import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/productThunks";

const initialState = {
  cart: [],
  products: [],

  error: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // addTocart: (state, action) => {
    //   state.cart.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { addTocart } = productSlice.actions;

export default productSlice.reducer;
