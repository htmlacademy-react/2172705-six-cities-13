import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '@/const';

export const fetchPreviewOffers = createAsyncThunk<PreviewOfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchPreviewOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);

    return data;
  }
);
