import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const addReview = createAsyncThunk<ReviewType, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/addReview',
  async ({ comment, rating, offerId, callback }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<ReviewType>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });

      if (callback) {
        callback();
      }

      return data;
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to add review'
      }));

      throw err;
    }
  }
);
