import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios_instance } from 'utils';

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await $axios_instance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await $axios_instance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
