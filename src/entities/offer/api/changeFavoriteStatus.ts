import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from '@/shared/lib';
import { APIRoute, AppRoute } from '@/const';

export const changeFavoriteStatus = createAsyncThunk<FullOfferType, ChangeFavoriteStatusData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'api/changeFavoriteStatus',
  async ({ offerId, status }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<FullOfferType>(`${APIRoute.Favorite}/${offerId}/${status}`, { offerId, status });

      return data;
    } catch (err) {
      dispatch(redirectToRoute(AppRoute.Login));

      throw err;
    }
  }
);
