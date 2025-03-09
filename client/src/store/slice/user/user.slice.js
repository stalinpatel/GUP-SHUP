import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./user.thunk";
import { toast } from "react-toastify";

const initialState = {
  userProfile: null,
  isAuthenticated: false,
  loading: false,
  buttonLoading: false,
};

const handlePending = (state) => {
  state.buttonLoading = true;
};

const handleRejected = (state, action) => {
  state.buttonLoading = false;
  toast.error(action.payload);
};

const handleFulfilled = (state, action, message, customHandler = null) => {
  state.buttonLoading = false;
  state.userProfile = action.payload?.responseData?.user;
  toast.success(message);
  if (customHandler) {
    customHandler(state, action);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Login
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, "Logged In Successfully", (state) => {
          state.isAuthenticated = true;
        })
      )
      .addCase(loginUserThunk.rejected, handleRejected)

      // 🔹 Register
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, "Registered Successfully", (state) => {
          state.isAuthenticated = true;
        })
      )
      .addCase(registerUserThunk.rejected, handleRejected)

      // 🔹 Logout
      .addCase(logoutUserThunk.pending, handlePending)
      .addCase(logoutUserThunk.fulfilled, (state, action) =>
        handleFulfilled(
          state,
          action,
          "Logged Out Successfully",
          (state, action) => {
            state.userProfile = null;
            state.isAuthenticated = false;
          }
        )
      )
      .addCase(logoutUserThunk.rejected, handleRejected);
  },
});

export const { userProfile, isAuthenticated, buttonLoading, loading } =
  userSlice.actions;

export default userSlice.reducer;
