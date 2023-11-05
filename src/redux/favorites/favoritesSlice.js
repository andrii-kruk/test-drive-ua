import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item.id !== payload.id);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export const favoritesReducer = persistReducer(
  {
    key: 'favorites',
    storage,
  },
  favoritesSlice.reducer
);
