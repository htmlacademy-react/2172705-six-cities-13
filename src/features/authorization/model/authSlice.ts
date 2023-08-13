import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { checkAuthStatus, login, logout } from '../index';

type initialStateType = {
  authStatus: APIStatus;
  userData: UserType | Record<string, never>;
};

const initialState: initialStateType = {
  authStatus: APIStatus.Idle,
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.authStatus = APIStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = APIStatus.Fulfilled;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = APIStatus.Rejected;
      })
      .addCase(checkAuthStatus.pending, (state) => {
        state.authStatus = APIStatus.Pending;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authStatus = APIStatus.Fulfilled;
        state.userData = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authStatus = APIStatus.Rejected;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = APIStatus.Rejected;
        state.userData = {};
      });
  }
});
