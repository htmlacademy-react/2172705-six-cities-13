import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const fetchReviews = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ReviewType[]>(`${APIRoute.Reviews}/${offerId}`);

      return data;
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to load reviews'
      }));

      throw err;
    }
  }
);
