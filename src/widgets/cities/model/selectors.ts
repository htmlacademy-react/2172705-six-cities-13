import { createSelector } from '@reduxjs/toolkit';

const selectPreviewOffers = (state: State) => state.offer.previewOffers;
const selectCurrentCity = (state: State) => state.city.city;

export const getfilteredOffersByCity = createSelector(
  [selectPreviewOffers, selectCurrentCity],
  (previewOffers, city) => previewOffers.filter((offer) => offer.city.name === city)
);
