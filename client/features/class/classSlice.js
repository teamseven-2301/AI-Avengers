import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk('classes', async () => {
  try {
    const { data } = await axios.get(`/api/classes`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const allClassesSlice = createSlice({
  name: 'classes',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectClasses = state => {
  return state.products;
};
export default allClassesSlice.reducer;
