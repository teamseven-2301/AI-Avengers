import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchClasses = createAsyncThunk(
  "classSelect/fetchClasses",
  async () => {
    try {
      const { data } = await axios.get(`/api/classes/${settingID}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const classSelectSlice = createSlice({
  name: "classSelect",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectClasses = (state) => {
  return state.products;
};
export default classSelectSlice.reducer;
