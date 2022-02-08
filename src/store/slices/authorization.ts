import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../utils/const';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
    status: 'idle',
  },
  reducers: {
    checkStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    getAvatar: (state, action) => {
      state.avatarUrl = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    },
    isInitial: (state) => {
      state.status = 'idle';
    },
    startLoading: (state) => {
      state.status = 'loading';
    },
    isFullFilled: (state) => {
      state.status = 'fullfilled';
    },
    isRejected: (state) => {
      state.status = 'rejected';
    },
  },
});

export const { checkStatus, getAvatar, startLoading, isFullFilled, isRejected, isInitial } = auth.actions;

export default auth.reducer;
