import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';

export const fetchCurrentOffer = createAsyncThunk<OpenedOfferType, string, AxiosThunkAPI>(
  'api/fetchCurrentOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OpenedOfferType>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);
