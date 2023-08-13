import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '@/shared/lib';
import { checkAuthStatus, login, logout } from '../index';

type initialStateType = {
  authStatus: AuthStatus;
  userData: UserType | Record<string, never>;
  isAuthInProgressStatus: boolean;
};

const initialState: initialStateType = {
  authStatus: AuthStatus.Unknown,
  userData: {},
  isAuthInProgressStatus: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthInProgressStatus = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.isAuthInProgressStatus = false;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.isAuthInProgressStatus = false;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userData = {};
      });
  }
});
