export enum SortType {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum ChangeFavoriteStatusAction {
  Add = 1,
  Delete = 0
}

export const INITIAL_SORT_TYPE = SortType.Popular;

export const NEARBY_OFFERS_COUNT = 3;
