import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken } from '@/shared/api';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to sign out'
      }));

      throw err;
    }
  }
);
