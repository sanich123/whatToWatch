import { createSlice } from '@reduxjs/toolkit';
import { asyncConditions, AuthorizationStatus } from '../../utils/const';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
    status: asyncConditions.idle,
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
      state.status = asyncConditions.idle;
    },
    startLoading: (state) => {
      state.status = asyncConditions.pending;
    },
    isFullFilled: (state) => {
      state.status = asyncConditions.fullfilled;
    },
    isRejected: (state) => {
      state.status = asyncConditions.rejected;
    },
  },
});

export const { checkStatus, getAvatar, startLoading, isFullFilled, isRejected, isInitial } = auth.actions;

export default auth.reducer;
