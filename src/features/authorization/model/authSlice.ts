import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { me, login, logout } from '../index';

type initialStateType = {
  meAuthStatus: APIStatus;
  loginAuthStatus: APIStatus;
  userData: UserType | Record<string, never>;
};

const initialState: initialStateType = {
  meAuthStatus: APIStatus.Idle,
  loginAuthStatus: APIStatus.Idle,
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(me.pending, (state) => {
        state.meAuthStatus = APIStatus.Pending;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.meAuthStatus = APIStatus.Fulfilled;
        state.userData = action.payload;
      })
      .addCase(me.rejected, (state) => {
        state.meAuthStatus = APIStatus.Rejected;
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
        state.meAuthStatus = APIStatus.Rejected;
        state.loginAuthStatus = APIStatus.Rejected;
        state.userData = {};
      });
  }
});
