import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '@/const';

export const checkAuthStatus = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/checkAuthStatus',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<UserType>(APIRoute.Login);

      return data;
    } catch (err){
      throw err;
    }
  }
);
