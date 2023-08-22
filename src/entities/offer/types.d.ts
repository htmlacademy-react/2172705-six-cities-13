type BaseOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type PreviewOfferType = BaseOfferType & {
  previewImage: string;
}

type OpenedOfferType = BaseOfferType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

type FullOfferType = PreviewOfferType & OpenedOfferType;

type ChangeFavoriteStatusData = {
  offerId: string;
  status: import('./const').ChangeFavoriteStatusAction;
}
