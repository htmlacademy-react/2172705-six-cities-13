import { createAsyncThunk } from '@reduxjs/toolkit';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const addReview = createAsyncThunk<ReviewType, ReviewData, AxiosThunkAPI>(
  'api/addReview',
  async ({ comment, rating, offerId, callback }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<ReviewType>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });

      if (callback) {
        callback();
      }

      dispatch(pushNotification({
        type: 'success',
        message: 'Adding a review was successful'
      }));

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
