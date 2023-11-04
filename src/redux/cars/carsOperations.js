import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios_instance } from 'utils';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await $axios_instance.get('/cars', {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
