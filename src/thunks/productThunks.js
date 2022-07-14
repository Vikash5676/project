import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../components/config";

// First, create the thunk

// thunk action
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${config.URL}/api/products`);

    return response.data;
  }
);
