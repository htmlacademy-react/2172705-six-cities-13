import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_SORT_TYPE, SortType } from '../const';
import { openedOffers } from '@/mock/openedOffers';
import { previewOffers } from '@/mock/previewOffers';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  openedOffers: OpenedOfferType[];
  sortType: SortType;
}

const initialState: initialStateType = {
  previewOffers: previewOffers,
  openedOffers: openedOffers,
  sortType: INITIAL_SORT_TYPE,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeSortType(state, action: PayloadAction<{ sortType: SortType }>) {
      state.sortType = action.payload.sortType;
    },
    resetSortType(state) {
      state.sortType = INITIAL_SORT_TYPE;
    }
  }
});

export const { changeSortType, resetSortType } = offerSlice.actions;
