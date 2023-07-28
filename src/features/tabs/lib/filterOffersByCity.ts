import { PreviewOfferType, CitiesType } from '@/global/types';

export const filterOffersByCity = (city: CitiesType, offers: PreviewOfferType[]) => offers.filter((offer) => offer.city.name === city);
