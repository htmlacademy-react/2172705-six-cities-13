import { createStatusObj } from '@/shared/lib';

const getStatus = (state: State) => state.offer.previewOffersStatus;
export const getPreviewOffers = (state: State) => state.offer.previewOffers;
export const getCurrentSortType = (state: State) => state.offer.currentSortType;

export const getPreviewOffersStatus = createStatusObj(getStatus);
