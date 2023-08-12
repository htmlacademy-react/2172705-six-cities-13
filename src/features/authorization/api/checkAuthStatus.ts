import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthStatus } from '@/shared/lib';
import { changeAuthStatus, changeUserData } from '../index';
import { APIRoute } from '@/const';

export const checkAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/checkAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserType>(APIRoute.Login);
      dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
      dispatch(changeUserData({ userData: data }));
    } catch {
      dispatch(changeAuthStatus({ authStatus: AuthStatus.NoAuth }));
    }
  }
);
