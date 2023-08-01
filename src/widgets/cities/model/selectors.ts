import { createSelector } from '@reduxjs/toolkit';
import { SortType } from '@/entities/offer';
import { sortByPriceAsc, sortByPriceDesc } from '../lib/sortByPrice';
import { sortByRatingDesc } from '../lib/sortByRating';

const selectPreviewOffers = (state: State) => state.offer.previewOffers;
const selectCurrentCity = (state: State) => state.city.city;
const currentSortType = (state: State) => state.offer.sortType;

export const getFilteredOffersByCity = createSelector(
  [selectPreviewOffers, selectCurrentCity],
  (previewOffers, city) => previewOffers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
  [currentSortType, getFilteredOffersByCity],
  (sortType, previewOffers) => {
    const previewOffersCopy = structuredClone(previewOffers);

    switch(sortType) {
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

