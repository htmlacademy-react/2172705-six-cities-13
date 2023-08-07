import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthStatus } from '@/shared/lib';
import { changeAuthStatus } from '../index';
import { APIRoute } from '@/const';

export const getAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/checkAuthStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
    } catch {
      dispatch(changeAuthStatus({ authStatus: AuthStatus.NoAuth }));
    }
  }
);
