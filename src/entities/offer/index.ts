export { offerSlice, changeSortType } from './model/offerSlice';
export {
  getPreviewOffers,
  getCurrentSortType,
  getPreviewOffersStatus
} from './model/selectors';
export { fetchPreviewOffers } from './api/fetchPreviewOffers';
export { SortType, INITIAL_SORT_TYPE } from './const';
