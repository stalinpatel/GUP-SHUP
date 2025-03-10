import { createSlice } from "@reduxjs/toolkit";
import { loadConversation } from "./message.thunk";

const initialState = {
  buttonLoading: false,
  loading: false,
  messages: null,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //SEND MESSAGE
      // .addCase(sendMessageThunk.pending, (state, action) => {
      //   state.buttonLoading = true;
      // })
      // .addCase(sendMessageThunk.fulfilled, (state, action) => {
      //   state.buttonLoading = false;
      // })
      // .addCase(sendMessageThunk.rejected, (state, action) => {
      //   state.buttonLoading = false;
      // })

      // LOAD CONVERSATION
      .addCase(loadConversation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadConversation.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload?.responseData?.messages;
      })
      .addCase(loadConversation.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {} = messageSlice.actions;

export default messageSlice.reducer;
