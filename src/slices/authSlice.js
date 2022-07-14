import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state = null, action) => {
      return (state = action.payload);
    },
    logout: (state = null, action) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
