import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utilities/axios.instance";

export const loginUserThunk = createAsyncThunk(
  "users/fetchById",
  async ({ username, password }, thunkAPI) => {
    console.log(username, password);
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      const errorOutput = error.message;
      return thunkAPI.rejectWithValue(errorOutput);
      // toast.error(error);
    }
  }
);
