import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadPreviewOffers, setIsOffersLoadingStatus } from '../index';
import { APIRoute } from '@/const';

export const fetchPreviewOffers = createAsyncThunk<void, AbortSignal, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchPreviewOffers',
  async (signal, { dispatch, extra: api }) => {
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers, { signal });
    dispatch(setIsOffersLoadingStatus({ status: false }));
    dispatch(loadPreviewOffers({ previewOffers: data }));
  }
);
