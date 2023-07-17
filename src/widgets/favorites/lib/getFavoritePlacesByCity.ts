import { PreviewOfferType } from '@/global/types';

export const getFavoritePlacesByCity = (offers: PreviewOfferType[]) => offers.reduce((acc: { [key: string]: PreviewOfferType[] }, offer) => {
  if (!acc[offer.city.name] && offer.isFavorite) {
    acc[offer.city.name] = [];
  }

  if (offer.isFavorite) {
    acc[offer.city.name].push(offer);
  }

  return acc;
}, {});
