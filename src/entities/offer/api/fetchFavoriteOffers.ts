import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosThunkAPI } from '@/shared/api';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const fetchFavoriteOffers = createAsyncThunk<PreviewOfferType[], undefined, AxiosThunkAPI>(
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
