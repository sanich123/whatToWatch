import { createSlice } from '@reduxjs/toolkit';

export const start = createSlice({
  name: 'start',
  initialState: {
    filter: 'All genres',
    films: [],
    promoFilm: {},
    favorites: [],
  },
  reducers: {
    changer: (state, action) => {
      state.filter = action.payload;
    },
    fetchFilms: (state, action) => {
      state.films = action.payload;
    },
    setPromo: (state, action) => {
      state.promoFilm = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { changer, fetchFilms, setPromo, setFavorites } = start.actions;

export default start.reducer;
