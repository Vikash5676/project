import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userThunks";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
