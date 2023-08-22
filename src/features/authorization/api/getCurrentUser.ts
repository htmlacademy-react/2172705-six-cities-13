import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '@/const';

export const getCurrentUser = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/getCurrentUser',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);

    return data;
  }
);
