import { createSlice } from '@reduxjs/toolkit';

export const film = createSlice({
  name: 'film',
  initialState: {
    comments: [],
  },
  reducers: {
    fetchComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { fetchComments } = film.actions;

export default film.reducer;
