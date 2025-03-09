import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utilities/axios.instance";

export const loginUserThunk = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data.errMessage;
      return thunkAPI.rejectWithValue(errorOutput);
    }
  }
);
export const registerUserThunk = createAsyncThunk(
  "users/register",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/register", {
        fullName,
        username,
        password,
        gender,
      });
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data.errMessage;
      return rejectWithValue(errorOutput);
    }
  }
);
export const logoutUserThunk = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data.errMessage;
      return rejectWithValue(errorOutput);
    }
  }
);
