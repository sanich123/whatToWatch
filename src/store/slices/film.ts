import { createSlice } from '@reduxjs/toolkit';

export const film = createSlice({
  name: 'film',
  initialState: {
    comments: [],
    status: 'idle',
    filmId: '',
  },
  reducers: {
    fetchComments: (state, action) => {
      state.comments = action.payload;
    },
    clearAll: (state) => {
      state.status = 'idle';
    },
    setFilmId: (state, action) => {
      state.filmId = action.payload;
    },
    startPosting: (state) => {
      state.status = 'pending';
    },
    fullFilled: (state) => {
      state.status = 'fullfilled';
    },
    rejected: (state) => {
      state.status = 'rejected';
    },
  },
});

export const { fetchComments, setFilmId, startPosting, fullFilled, rejected, clearAll } = film.actions;

export default film.reducer;
