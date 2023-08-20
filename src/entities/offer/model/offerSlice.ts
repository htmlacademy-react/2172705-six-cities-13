import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { getRandomItemsArray, resetState } from '@/shared/lib';
import {
  INITIAL_SORT_TYPE,
  NEARBY_OFFERS_COUNT,
  SortType
} from '../const';
import {
  fetchPreviewOffers,
  fetchCurrentOffer,
  fetchNearbyOffers
} from '../index';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  previewOffersStatus: APIStatus;
  currentOffer: Nullable<OpenedOfferType>;
  currentOfferStatus: APIStatus;
  nearbyOffers: PreviewOfferType[];
  nearbyOffersStatus: APIStatus;
  currentSortType: SortType;
}

const initialState: initialStateType = {
  previewOffers: [],
  previewOffersStatus: APIStatus.Idle,
  currentOffer: null,
  currentOfferStatus: APIStatus.Idle,
  nearbyOffers: [],
  nearbyOffersStatus: APIStatus.Idle,
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
      })
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.currentOfferStatus = APIStatus.Pending;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.currentOfferStatus = APIStatus.Fulfilled;
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.currentOfferStatus = APIStatus.Rejected;
        state.currentOffer = null;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersStatus = APIStatus.Pending;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersStatus = APIStatus.Fulfilled;
        state.nearbyOffers = getRandomItemsArray(action.payload, NEARBY_OFFERS_COUNT);
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersStatus = APIStatus.Rejected;
        state.nearbyOffers = [];
      });
  }
});

export const { changeSortType } = offerSlice.actions;
