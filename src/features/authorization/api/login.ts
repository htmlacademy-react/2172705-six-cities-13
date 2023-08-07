import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken } from '@/shared/api';
import { AuthStatus } from '@/shared/lib';
import { changeAuthStatus } from '../index';
import { APIRoute } from '@/const';

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
  }
);
