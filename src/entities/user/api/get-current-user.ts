import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';

export const getCurrentUser = createAsyncThunk<UserType, undefined, AxiosThunkAPI>(
  'api/getCurrentUser',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);

    return data;
  }
);
