import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utilities/axios.instance";

export const loadConversation = createAsyncThunk(
  "message/getMessages",
  async ({ participantId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/message/get-messages/${participantId}`
      );
      //   console.log("resp:", response.data);
      return response.data;
    } catch (error) {
      const errorOutput = error?.response?.data.errMessage;
      return rejectWithValue(errorOutput);
    }
  }
);
// export const sendMessageThunk = createAsyncThunk(
//   "message/send",
//   async ({ receiverId, message }, { rejectWithValue }) => {
//     console.log("receiverId :", receiverId);
//     try {
//       const response = await axiosInstance.post(`/send/:${receiverId}`);
//       return response.data;
//     } catch (error) {
//       const errorOutput = error?.response?.data.errMessage;
//       return rejectWithValue(errorOutput);
//     }
//   }
// );
