import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  id: null,
  onlineUsers: [],
};

export const socketSlice = createSlice({
  name: "socketobj",
  initialState,
  reducers: {
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
    setSocketId: (state, action) => {
      state.id = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setIsConnected, setSocketId, setOnlineUsers } =
  socketSlice.actions;

export default socketSlice.reducer;
