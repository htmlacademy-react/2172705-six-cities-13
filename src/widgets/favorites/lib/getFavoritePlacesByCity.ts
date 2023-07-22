import { PreviewOfferType } from '@/global/types';

export const getFavoritePlacesByCity = (offers: PreviewOfferType[]) => offers.reduce((acc: { [key: string]: PreviewOfferType[] }, offer) => {
  if (!offer.isFavorite) {
    return acc;
  }

  if (!acc[offer.city.name]) {
    acc[offer.city.name] = [];
  }

  acc[offer.city.name].push(offer);

  return acc;
}, {});
