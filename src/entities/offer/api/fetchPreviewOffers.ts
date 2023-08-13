import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '@/const';

export const fetchPreviewOffers = createAsyncThunk<PreviewOfferType[], AbortSignal, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchPreviewOffers',
  async (signal, { extra: api }) => {
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers, { signal });

    return data;
  }
);
