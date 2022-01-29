import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../utils/const';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    authStatus: AuthorizationStatus.Unknown,
    avatarUrl: '',
  },
  reducers: {
    checkStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    getAvatar: (state, action) => {
      state.avatarUrl = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    },
  },
});

export const { checkStatus, getAvatar } = auth.actions;

export default auth.reducer;
