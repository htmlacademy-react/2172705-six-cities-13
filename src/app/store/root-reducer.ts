import { combineReducers } from '@reduxjs/toolkit';
import { citySlice } from '@/entities/city';
import { offerSlice } from '@/entities/offer';
import { reviewSlice } from '@/entities/review';
import { userSlice } from '@/entities/user';
import { notificationSlice } from '@/shared/lib';

export const rootReducer = combineReducers({
  [citySlice.name]: citySlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [reviewSlice.name]: reviewSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
