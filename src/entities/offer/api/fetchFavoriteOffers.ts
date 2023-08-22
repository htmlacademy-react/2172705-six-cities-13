import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const fetchFavoriteOffers = createAsyncThunk<PreviewOfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<PreviewOfferType[]>(APIRoute.Favorite);

      return data;
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to load favorite offers'
      }));

      throw err;
    }
  }
);
