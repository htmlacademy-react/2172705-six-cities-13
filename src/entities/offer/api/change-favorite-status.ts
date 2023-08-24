import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '@/const';

export const changeFavoriteStatus = createAsyncThunk<FullOfferType, ChangeFavoriteStatusData, AxiosThunkAPI>(
  'api/changeFavoriteStatus',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<FullOfferType>(`${APIRoute.Favorite}/${offerId}/${status}`, { offerId, status });

    return data;
  }
);
