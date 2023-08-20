import { createStatusObj } from '@/shared/lib';

export const getPreviewOffers = (state: State) => state.offer.previewOffers;
const getPreview0ffersStatus = (state: State) => state.offer.previewOffersStatus;

export const getCurrentOffer = (state: State) => state.offer.currentOffer;
const getCurrentOfferStatus = (state: State) => state.offer.currentOfferStatus;

export const getNearbyOffers = (state: State) => state.offer.nearbyOffers;
const getNearby0ffersStatus = (state: State) => state.offer.nearbyOffersStatus;

export const getCurrentSortType = (state: State) => state.offer.currentSortType;

export const getPreviewOffersStatusObj = createStatusObj(getPreview0ffersStatus);
export const getCurrentOfferStatusObj = createStatusObj(getCurrentOfferStatus);
export const getNearbyOffersStatusObj = createStatusObj(getNearby0ffersStatus);
