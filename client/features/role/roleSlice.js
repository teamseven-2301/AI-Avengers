import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// o: you don't need try / catches in your thunks

export const fetchRoles = createAsyncThunk(
  'roleSelect/fetchRoles',
  async settingID => {
    try {
      const { data } = await axios.get(`/api/roles/${settingID}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const roleSelectSlice = createSlice({
  name: 'roleSelect',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRoles.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectRoles = state => {
  return state.products;
};
export default roleSelectSlice.reducer;
