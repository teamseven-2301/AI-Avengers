import { createSlice } from "@reduxjs/toolkit";

const selectedroleSlice = createSlice({
  name: "selectedRole",
  initialState: {},
  reducers: {
    setRole: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRole } = selectedroleSlice.actions;
export default selectedroleSlice.reducer;
