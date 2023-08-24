import { createSelector } from '@reduxjs/toolkit';
import { createStatusObj } from '@/shared/lib';
import { MAX_COMMENTS_VIEW_COUNT } from '../const';
import { sortByDateDesc } from '../lib/sort-by-date';

export const getReviews = (state: State) => state.review.reviews;
const getReviewStatus = (state: State) => state.review.reviewsStatus;

const getAddReviewStatus = (state: State) => state.review.addReviewStatus;

export const getReviewStatusObj = createStatusObj(getReviewStatus);
export const getAddReviewStatusObj = createStatusObj(getAddReviewStatus);

export const getCurrentReviews = createSelector(
  [getReviews],
  (reviews) => [...reviews].sort(sortByDateDesc()).slice(0, MAX_COMMENTS_VIEW_COUNT)
);
