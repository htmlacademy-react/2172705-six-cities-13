import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { resetState } from '@/shared/lib';
import { INITIAL_SORT_TYPE, SortType } from '../const';
import { fetchPreviewOffers } from '../index';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  previewOffersStatus: APIStatus;
  currentSortType: SortType;
}

const initialState: initialStateType = {
  previewOffers: [],
  previewOffersStatus: APIStatus.Idle,
  currentSortType: INITIAL_SORT_TYPE,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeSortType(state, action: PayloadAction<{ sortType: SortType }>) {
      state.currentSortType = action.payload.sortType;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetState, (state) => {
        state.currentSortType = INITIAL_SORT_TYPE;
      })
      .addCase(fetchPreviewOffers.pending, (state) => {
        state.previewOffersStatus = APIStatus.Pending;
      })
      .addCase(fetchPreviewOffers.fulfilled, (state, action) => {
        state.previewOffersStatus = APIStatus.Fulfilled;
        state.previewOffers = action.payload;
      })
      .addCase(fetchPreviewOffers.rejected, (state) => {
        state.previewOffersStatus = APIStatus.Rejected;
      });
  }
});

export const { changeSortType } = offerSlice.actions;
