import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user/user.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
