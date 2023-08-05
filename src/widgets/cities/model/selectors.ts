import { createSelector } from '@reduxjs/toolkit';
import { sortByPriceAsc, sortByPriceDesc, sortByRatingDesc } from '@/features/sort';
import { SortType } from '@/entities/offer';

const selectPreviewOffers = (state: State) => state.offer.previewOffers;
const selectCurrentCity = (state: State) => state.city.city;
const currentSortType = (state: State) => state.offer.sortType;

const getFilteredOffersByCity = createSelector(
  [selectPreviewOffers, selectCurrentCity],
  (previewOffers, city) => previewOffers.filter((offer) => offer.city.name === city)
);

const getSortedOffers = createSelector(
  [currentSortType, getFilteredOffersByCity],
  (sortType, previewOffers) => {
    const previewOffersCopy = structuredClone(previewOffers);

    switch (sortType) {
      case SortType.Popular:
        return previewOffers;
      case SortType.PriceAsc:
        return previewOffersCopy.sort(sortByPriceAsc());
      case SortType.PriceDesc:
        return previewOffersCopy.sort(sortByPriceDesc());
      case SortType.Rating:
        return previewOffersCopy.sort(sortByRatingDesc());
      default:
        throw new Error('There is no sorting implementation for this sorting type');
    }
  }
);

export const getCurrentOffers = createSelector(
  [getSortedOffers],
  (offers) => offers
);

