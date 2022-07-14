import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import config from "../components/config";

// First, create the thunk

// thunk action
export const fetchUser = createAsyncThunk("user/fetchusers", async () => {
  const response = await axios.get(`${config.URL}/api/admin/users`);
  return response.data;
});


