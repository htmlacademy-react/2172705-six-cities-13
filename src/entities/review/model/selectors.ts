import { createStatusObj } from '@/shared/lib';

export const getReviews = (state: State) => state.review.reviews;
const getReviewStatus = (state: State) => state.review.reviewsStatus;

export const getReviewStatusObj = createStatusObj(getReviewStatus);
