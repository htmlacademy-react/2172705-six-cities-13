import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { resetState } from '@/shared/lib';
import { INITIAL_SORT_TYPE, SortType } from '../const';
import { fetchPreviewOffers } from '../index';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  currentSortType: SortType;
  isOffersLoadingStatus: boolean;
}

const initialState: initialStateType = {
  previewOffers: [],
  currentSortType: INITIAL_SORT_TYPE,
  isOffersLoadingStatus: true
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
        state.isOffersLoadingStatus = true;
      })
      .addCase(fetchPreviewOffers.fulfilled, (state, action) => {
        state.isOffersLoadingStatus = false;
        state.previewOffers = action.payload;
      });
  }
});

export const { changeSortType } = offerSlice.actions;
