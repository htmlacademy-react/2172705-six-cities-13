import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { fetchReviews } from '../index';

type initialStateType = {
  reviews: ReviewType[];
  reviewsStatus: APIStatus;
}

const initialState: initialStateType = {
  reviews: [],
  reviewsStatus: APIStatus.Idle
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviewsStatus = APIStatus.Pending;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewsStatus = APIStatus.Fulfilled;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsStatus = APIStatus.Rejected;
        state.reviews = [];
      });
  }
});
