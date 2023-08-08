import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus, resetState } from '@/shared/lib';

type initialStateType = {
  authStatus: AuthStatus;
  userData: UserType | Record<string, never>;
}

const initialState: initialStateType = {
  authStatus: AuthStatus.Unknown,
  userData: {}
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state) => {
      state.authStatus = AuthStatus.Unknown;
      state.userData = {};
    });
  }
});

export const { changeAuthStatus, changeUserData } = authSlice.actions;
