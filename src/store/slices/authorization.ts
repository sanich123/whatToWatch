import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../utils/const';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
    successAuth: false,
  },
  reducers: {
    checkStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    getAvatar: (state, action) => {
      state.avatarUrl = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    },
    successAuth: (state) => {
      state.successAuth = true;
    },
  },
});

export const { checkStatus, getAvatar, successAuth } = auth.actions;

export default auth.reducer;
