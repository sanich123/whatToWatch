import { createSlice } from '@reduxjs/toolkit';
import { asyncConditions } from '../../../utils/const';

export const film = createSlice({
  name: 'film',
  initialState: {
    comments: [],
    status: asyncConditions.idle,
    filmId: '',
  },
  reducers: {
    fetchComments: (state, action) => {
      state.comments = action.payload;
    },
    clearAll: (state) => {
      state.status = asyncConditions.idle;
    },
    setFilmId: (state, action) => {
      state.filmId = action.payload;
    },
    startPosting: (state) => {
      state.status = asyncConditions.pending;
    },
    fullFilled: (state) => {
      state.status = asyncConditions.fullfilled;
    },
    rejected: (state) => {
      state.status = asyncConditions.rejected;
    },
  },
});

export const { fetchComments, setFilmId, startPosting, fullFilled, rejected, clearAll } = film.actions;

export default film.reducer;
