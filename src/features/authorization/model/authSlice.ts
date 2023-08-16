import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import {
  getCurrentUser,
  login,
  logout
} from '../index';

type initialStateType = {
  currentUserStatus: APIStatus;
  loginAuthStatus: APIStatus;
  userData: UserType | Record<string, never>;
};

const initialState: initialStateType = {
  currentUserStatus: APIStatus.Idle,
  loginAuthStatus: APIStatus.Idle,
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.currentUserStatus = APIStatus.Pending;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUserStatus = APIStatus.Fulfilled;
        state.userData = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.currentUserStatus = APIStatus.Rejected;
      })
      .addCase(login.pending, (state) => {
        state.loginAuthStatus = APIStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginAuthStatus = APIStatus.Fulfilled;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loginAuthStatus = APIStatus.Rejected;
      })
      .addCase(logout.fulfilled, (state) => {
        state.currentUserStatus = APIStatus.Rejected;
        state.loginAuthStatus = APIStatus.Rejected;
        state.userData = {};
      });
  }
});
