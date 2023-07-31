import { createSlice } from '@reduxjs/toolkit';
import { openedOffers } from '@/mock/openedOffers';
import { previewOffers } from '@/mock/previewOffers';

type initialStateType = {
  previewOffers: PreviewOfferType[];
  openedOffers: OpenedOfferType[];
}

const initialState: initialStateType = {
  previewOffers: previewOffers,
  openedOffers: openedOffers,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {}
});
