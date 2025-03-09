import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  password: "",
  isAuthenticated: false,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pending ");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("Fulfilled :", action.payload);
      toast.success("Logged In Successfully");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected :", action.payload);
      toast.error(action.payload);
    });
  },
});

export const { Login } = userSlice.actions;

export default userSlice.reducer;
