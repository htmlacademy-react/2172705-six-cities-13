import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadPreviewOffers, setIsOffersLoadingStatus } from '../index';
import { APIRoute } from '@/const';

export const fetchPreviewOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<PreviewOfferType[]>(APIRoute.Offers);
    dispatch(setIsOffersLoadingStatus({ status: false }));
    dispatch(loadPreviewOffers({ previewOffers: data }));
  }
);
