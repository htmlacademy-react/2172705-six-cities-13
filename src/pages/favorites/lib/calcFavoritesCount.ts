import { PreviewOfferType } from '@/global/types';

export const calcFavoritesCount = (offers: PreviewOfferType[]) => offers.reduce((acc, offer) => {
  if (offer.isFavorite) {
    return acc + 1;
  }

  return acc;
}, 0);
