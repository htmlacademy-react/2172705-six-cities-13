import { CityType } from './city';
import { LocationType } from './location';
import { UserType } from './user';

type BaseOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type PreviewOfferType = BaseOfferType & {
  previewImage: string;
}

export type OpenedOfferType = BaseOfferType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Pick<UserType, 'name' | 'avatarUrl' | 'isPro'>;
  images: string[];
  maxAdults: number;
}
