import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isAuthenticated: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: () => {
      console.log("Hello login");
    },
  },
});

export const { Login } = userSlice.actions;

export default userSlice.reducer;
