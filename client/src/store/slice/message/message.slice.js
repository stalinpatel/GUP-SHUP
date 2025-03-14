import { createSlice } from "@reduxjs/toolkit";
import { loadConversationThunk } from "./message.thunk";
import { sendMessageThunk } from "./message.thunk";

const initialState = {
  buttonLoading: false,
  loading: false,
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    pushMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
      // console.log("new messge thunk", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // SEND MESSAGE
      .addCase(sendMessageThunk.pending, (state, action) => {
        state.buttonLoading = true;
      })
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.buttonLoading = false;
      })
      .addCase(sendMessageThunk.rejected, (state, action) => {
        state.buttonLoading = false;
      })

      // LOAD CONVERSATION
      .addCase(loadConversationThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadConversationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload?.responseData?.messages;
      })
      .addCase(loadConversationThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { pushMessage } = messageSlice.actions;

export default messageSlice.reducer;
