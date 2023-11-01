import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const $instance = axios.create({
  baseURL: 'https://64ca452c700d50e3c7049c8c.mockapi.io/api',
});

export const getCars = createAsyncThunk('cars/getCars', async (_, thunkAPI) => {
  try {
    const { data } = await $instance.get('/cars');
    console.log({ data });
    return { data };
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
