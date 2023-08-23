import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosThunkAPI, saveToken } from '@/shared/api';
import { pushNotification, redirectToRoute } from '@/shared/lib';
import { APIRoute, AppRoute } from '@/const';

export const login = createAsyncThunk<UserType, AuthData, AxiosThunkAPI>(
  'api/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserType>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));

      return data;
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to sign in'
      }));

      throw err;
    }
  }
);
