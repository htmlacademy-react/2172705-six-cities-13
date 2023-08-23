import { createAsyncThunk } from '@reduxjs/toolkit';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const fetchReviews = createAsyncThunk<ReviewType[], string, AxiosThunkAPI>(
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
