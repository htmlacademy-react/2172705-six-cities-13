import { createAsyncThunk } from '@reduxjs/toolkit';
import { pushNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const fetchNearbyOffers = createAsyncThunk<PreviewOfferType[], string, AxiosThunkAPI>(
  'api/fetchNearbyOffers',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<PreviewOfferType[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);

      return data;
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to load nearby offers'
      }));

      throw err;
    }

  }
);
