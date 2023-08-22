type ReviewType = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

type ReviewData = {
  comment: string;
  rating: number;
  offerId: string;
}
