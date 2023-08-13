import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken } from '@/shared/api';
import { redirectToRoute } from '@/shared/lib';
import { APIRoute, AppRoute } from '@/const';

export const login = createAsyncThunk<UserType, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserType>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));

      return data;
    } catch (err){
      throw err;
    }
  }
);
