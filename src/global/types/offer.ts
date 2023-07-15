import { CityType, LocationType, UserType } from '..';

export type FullOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Pick<UserType, 'name' | 'avatarUrl' | 'isPro'>;
  images: string[];
  previewImage: string;
  maxAdults: number;
}

export type PreviewOfferType = Omit<FullOfferType, (
  'description' |
  'bedrooms' |
  'goods' |
  'images' |
  'maxAdults'
)>

export type OpenedOfferType = Omit<FullOfferType, 'previewImage'>
