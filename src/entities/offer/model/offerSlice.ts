import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { getRandomItemsFromArray, resetState } from '@/shared/lib';
import {
  INITIAL_SORT_TYPE,
  NEARBY_OFFERS_COUNT,
  SortType
} from '../const';
import {
  fetchPreviewOffers,
  fetchCurrentOffer,
  fetchNearbyOffers,
  fetchFavoriteOffers
} from '../index';

type initialStateType = {
  currentOffer: Nullable<OpenedOfferType>;
  currentOfferStatus: APIStatus;
  previewOffers: PreviewOfferType[];
  previewOffersStatus: APIStatus;
  nearbyOffers: PreviewOfferType[];
  nearbyOffersStatus: APIStatus;
  favoriteOffers: PreviewOfferType[];
  currentSortType: SortType;
}

const initialState: initialStateType = {
  currentOffer: null,
  currentOfferStatus: APIStatus.Idle,
  previewOffers: [],
  previewOffersStatus: APIStatus.Idle,
  nearbyOffers: [],
  nearbyOffersStatus: APIStatus.Idle,
  favoriteOffers: [],
  currentSortType: INITIAL_SORT_TYPE,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeSortType(state, action: PayloadAction<SortType>) {
      state.currentSortType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetState, (state) => {
        state.currentSortType = INITIAL_SORT_TYPE;
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
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersStatus = APIStatus.Pending;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersStatus = APIStatus.Fulfilled;
        state.nearbyOffers = getRandomItemsFromArray(action.payload, NEARBY_OFFERS_COUNT);
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersStatus = APIStatus.Rejected;
        state.nearbyOffers = [];
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteOffers = [];
      });
  }
});

export const { changeSortType } = offerSlice.actions;
