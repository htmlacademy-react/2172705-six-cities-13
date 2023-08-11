import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { resetState } from '@/shared/lib';
import { INITIAL_SORT_TYPE, SortType } from '../const';

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
    },
    loadPreviewOffers(state, action: PayloadAction<{ previewOffers: PreviewOfferType[] }>) {
      state.previewOffers = action.payload.previewOffers;
    },
    changeIsOffersLoadingStatus(state, action: PayloadAction<{ status: boolean }>) {
      state.isOffersLoadingStatus = action.payload.status;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state) => {
      state.currentSortType = INITIAL_SORT_TYPE;
    });
  }
});

export const {
  changeSortType,
  loadPreviewOffers,
  changeIsOffersLoadingStatus
} = offerSlice.actions;