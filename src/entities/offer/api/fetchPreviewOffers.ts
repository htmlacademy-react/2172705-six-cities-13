import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosThunkAPI } from '@/shared/api';
import { APIRoute } from '@/const';

export const fetchPreviewOffers = createAsyncThunk<PreviewOfferType[], undefined, AxiosThunkAPI>(
  'api/fetchPreviewOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);

    return data;
  }
);
