import { createSlice } from '@reduxjs/toolkit';

export const film = createSlice({
  name: 'film',
  initialState: {
    comments: [],
    sendingFailed: false,
    successSending: false,
  },
  reducers: {
    fetchComments: (state, action) => {
      state.comments = action.payload;
      state.successSending = true;
    },
    sendingFailed: (state) => {
      state.sendingFailed = true;
    },
  },
});

export const { fetchComments, sendingFailed } = film.actions;

export default film.reducer;
