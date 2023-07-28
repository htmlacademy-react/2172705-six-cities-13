import { createSlice } from '@reduxjs/toolkit';
import { filterOffersByCity } from '../lib/filterOffersByCity';
import { INITIAL_CITY } from '@/global/const';
import { previewOffers } from '@/global/mock/previewOffers';
import { CitiesType, PreviewOfferType } from '@/global/types';

type initialStateType = {
  city: CitiesType;
  renderedOffers: PreviewOfferType[];
}

const initialState: initialStateType = {
  city: INITIAL_CITY,
  renderedOffers: filterOffersByCity(INITIAL_CITY, previewOffers)
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeCity(state, action: { type: string; payload: { city: CitiesType } }) {
      state.city = action.payload.city;
    },
    changeRenderedOffers(state, action: { type: string; payload: { city: CitiesType } }) {
      state.renderedOffers = filterOffersByCity(action.payload.city, previewOffers);
    },
    resetTabs(state) {
      state.city = INITIAL_CITY;
      state.renderedOffers = filterOffersByCity(INITIAL_CITY, previewOffers);
    }
  }
});

export const { changeCity, changeRenderedOffers, resetTabs } = tabsSlice.actions;
