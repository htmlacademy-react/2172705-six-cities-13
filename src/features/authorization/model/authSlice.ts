import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '@/shared/lib';

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
  reducers: {
    changeAuthStatus(state, action: PayloadAction<{ authStatus: AuthStatus }>) {
      state.authStatus = action.payload.authStatus;
    },
    changeUserData(state, action: PayloadAction<{ userData: UserType }>) {
      state.userData = action.payload.userData;
    },
    changeIsAuthInProgressStatus(state, action: PayloadAction<{ status: boolean }>) {
      state.isAuthInProgressStatus = action.payload.status;
    },
    resetUser(state) {
      state.authStatus = AuthStatus.Unknown;
      state.userData = {};
    },
  },
});

export const {
  changeAuthStatus,
  changeUserData,
  changeIsAuthInProgressStatus,
  resetUser,
} = authSlice.actions;
