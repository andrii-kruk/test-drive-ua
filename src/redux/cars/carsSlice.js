import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './carsOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const uniquePayload = payload.filter(newItem => {
          return !state.items.some(
            existingItem => existingItem.id === newItem.id
          );
        });

        state.items = [...state.items, ...uniquePayload];
        state.error = null;
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = persistReducer(
  {
    key: 'cars',
    storage,
  },
  carsSlice.reducer
);
