import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosThunkAPI } from '@/shared/api';
import { APIRoute } from '@/const';

export const getCurrentUser = createAsyncThunk<UserType, undefined, AxiosThunkAPI>(
  'api/getCurrentUser',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);

    return data;
  }
);
