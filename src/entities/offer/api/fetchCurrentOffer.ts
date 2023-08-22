import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '@/const';

export const fetchCurrentOffer = createAsyncThunk<OpenedOfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchCurrentOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OpenedOfferType>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);
