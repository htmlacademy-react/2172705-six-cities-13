import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { resetState } from '@/shared/lib';
import { INITIAL_SORT_TYPE, SortType } from '../const';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  sortType: SortType;
  isOffersLoadingStatus: boolean;
}

const initialState: initialStateType = {
  previewOffers: [],
  sortType: INITIAL_SORT_TYPE,
  isOffersLoadingStatus: true
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeSortType(state, action: PayloadAction<{ sortType: SortType }>) {
      state.sortType = action.payload.sortType;
    },
    loadPreviewOffers(state, action: PayloadAction<{ previewOffers: PreviewOfferType[] }>) {
      state.previewOffers = action.payload.previewOffers;
    },
    setIsOffersLoadingStatus(state, action: PayloadAction<{ status: boolean }>) {
      state.isOffersLoadingStatus = action.payload.status;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state) => {
      state.sortType = INITIAL_SORT_TYPE;
    });
  }
});

export const { changeSortType, loadPreviewOffers, setIsOffersLoadingStatus } = offerSlice.actions;
