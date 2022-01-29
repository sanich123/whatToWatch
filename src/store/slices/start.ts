import { createSlice } from '@reduxjs/toolkit';

export const start = createSlice({
  name: 'start',
  initialState: {
    filter: 'All genres',
    films: [],
    promoFilm: {},
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
  },
});

export const { changer, fetchFilms, setPromo } = start.actions;

export default start.reducer;
