import { createSlice } from '@reduxjs/toolkit';

export const film = createSlice({
  name: 'film',
  initialState: {
    comments: [],
    sendingFailed: false,
    successSending: false,
    filmId: '',
  },
  reducers: {
    fetchComments: (state, action) => {
      state.comments = action.payload;
    },
    sendingSuccess: (state) => {
      state.successSending = true;
    },
    sendingFailed: (state) => {
      state.sendingFailed = true;
    },
    setFilmId: (state, action) => {
      state.filmId = action.payload;
    },
  },
});

export const { fetchComments, sendingFailed, setFilmId, sendingSuccess } = film.actions;

export default film.reducer;
