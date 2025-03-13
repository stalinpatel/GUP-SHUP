import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
};

export const socketSlice = createSlice({
  name: "socketslice",
  initialState,
  reducers: {
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setIsConnected } = socketSlice.actions;

export default socketSlice.reducer;
