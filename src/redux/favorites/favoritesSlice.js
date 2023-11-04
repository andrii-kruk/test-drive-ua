import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite } from './favoritesOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites.push(payload);
        state.error = null;
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(
          item => item.id !== payload.id
        );
        state.error = null;
      })
      .addCase(deleteFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const favoritesReducer = persistReducer(
  {
    key: 'favorites',
    storage,
  },
  favoritesSlice.reducer
);
