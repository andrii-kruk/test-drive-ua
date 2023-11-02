import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const $instance = axios.create({
  baseURL: 'https://64ca452c700d50e3c7049c8c.mockapi.io/api',
});

export const getCars = createAsyncThunk(
  'cars/getCars',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await $instance.get('/cars', {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'cars/addFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'cars/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await $instance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
