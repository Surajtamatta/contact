import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const submitForm = createAsyncThunk(
  'contact/submitForm',
    async (formData, { rejectWithValue }) => {
        try {
        const {data} = await axios.post('http://example.domain/dev/v1/contact-us',formData);
        return data;
        } catch (error) {

          return (
            rejectWithValue(error.message || 'Something went wrong')
          );
        }
    }
);


const  initialState={
  name: '',
  email: '',
  websiteURL: '',
  projectDetails: '',
  status: null, 
  error: null,  
}

const formSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetStatus: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to submit form';
      });
  }
});

export const { updateField, resetStatus } = formSlice.actions;
export default formSlice.reducer;
