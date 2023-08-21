import { createStatusObj } from '@/shared/lib';

export const getReviews = (state: State) => state.review.reviews;
const getReviewStatus = (state: State) => state.review.reviewsStatus;

const getAddReviewStatus = (state: State) => state.review.addReviewStatus;

export const getReviewStatusObj = createStatusObj(getReviewStatus);
export const getAddReviewStatusObj = createStatusObj(getAddReviewStatus);
