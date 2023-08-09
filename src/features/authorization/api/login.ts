import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken } from '@/shared/api';
import { AuthStatus, redirectToRoute } from '@/shared/lib';
import { changeAuthStatus, changeIsAuthInProgressStatus, changeUserData } from '../index';
import { APIRoute, AppRoute } from '@/const';

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    dispatch(changeIsAuthInProgressStatus({ status: true }));
    const { data } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(changeIsAuthInProgressStatus({ status: false }));

    dispatch(changeAuthStatus({ authStatus: AuthStatus.Auth }));
    dispatch(changeUserData({ userData: data }));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);
