import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  getUserProfileThunk,
  getOtherUsersThunk,
} from "./user.thunk";
import { toast } from "react-toastify";

const initialState = {
  userProfile: null,
  isAuthenticated: false,
  loading: true,
  buttonLoading: false,
  otherUsers: [],
  selectedUser: JSON.parse(localStorage.getItem("selectedUser")) || null,
};

const handlePending = (state, action, customHandler = null) => {
  state.buttonLoading = true;
  if (customHandler) {
    customHandler(state, action);
  }
};

const handleRejected = (state, action, customHandler = null) => {
  state.buttonLoading = false;
  toast.error(action.payload);
  if (customHandler) {
    customHandler(state, action);
  }
};

const handleFulfilled = (
  state,
  action,
  message = null,
  customHandler = null
) => {
  state.buttonLoading = false;
  state.loading = false;

  if (message) {
    toast.success(message);
  }
  if (customHandler) {
    customHandler(state, action);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
      localStorage.setItem("selectedUser", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Login
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, "Logged In Successfully", (state) => {
          state.isAuthenticated = true;
          state.userProfile = action.payload?.responseData?.user;
        })
      )
      .addCase(loginUserThunk.rejected, handleRejected)

      // 🔹 Register
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, "Registered Successfully", (state) => {
          state.isAuthenticated = true;
          state.userProfile = action.payload?.responseData?.user;
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
            state.buttonLoading = false;
            state.isAuthenticated = false;
            state.userProfile = null;
            state.otherUsers = null;
            state.selectedUser = null;
            localStorage.clear();
          }
        )
      )
      .addCase(logoutUserThunk.rejected, handleRejected)

      // 🔹 Get Profile

      .addCase(getUserProfileThunk.pending, (state, action) =>
        handlePending(state, action, (state, action) => {
          state.isAuthenticated = false;
          state.loading = true;
        })
      )
      .addCase(getUserProfileThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, null, (state, action) => {
          state.isAuthenticated = true;
          state.loading = false;
          // console.log("userProfile :", action.payload?.responseData);
          state.userProfile = action.payload?.responseData;
        })
      )
      .addCase(getUserProfileThunk.rejected, (state, action) =>
        handleRejected(state, action, (state, action) => {
          state.isAuthenticated = false;
          state.loading = false;
        })
      )

      // 🔹 Get other users
      .addCase(getOtherUsersThunk.pending, (state, action) =>
        handlePending(state, action, (state, action) => {
          state.loading = true;
        })
      )
      .addCase(getOtherUsersThunk.fulfilled, (state, action) =>
        handleFulfilled(state, action, null, (state, action) => {
          state.loading = false;
          state.otherUsers = action.payload?.responseData;
        })
      )
      .addCase(getOtherUsersThunk.rejected, (state, action) =>
        handleRejected(state, action, (state, action) => {
          state.loading = false;
        })
      );
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
