import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '@/shared/lib';

type initialStateType = {
  authStatus: AuthStatus;
}

const initialState: initialStateType = {
  authStatus: AuthStatus.Unknown
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<{ authStatus: AuthStatus }>) {
      state.authStatus = action.payload.authStatus;
    }
  }
});

export const { changeAuthStatus } = authSlice.actions;
