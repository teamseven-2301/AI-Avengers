import { createSlice } from "@reduxjs/toolkit";

const messageHistorySlice = createSlice({
  name: "messageHistory",
  initialState: [],
  reducers: {
    updateMessageHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateMessageHistory } = messageHistorySlice.actions;
export default messageHistorySlice.reducer;
