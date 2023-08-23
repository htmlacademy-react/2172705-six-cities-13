import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosThunkAPI } from '@/shared/api';
import { APIRoute } from '@/const';

export const fetchCurrentOffer = createAsyncThunk<OpenedOfferType, string, AxiosThunkAPI>(
  'api/fetchCurrentOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OpenedOfferType>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);
