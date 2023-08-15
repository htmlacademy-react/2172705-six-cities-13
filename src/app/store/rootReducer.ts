import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@/features/authorization';
import { citySlice } from '@/entities/city';
import { offerSlice } from '@/entities/offer';
import { notificationSlice } from '@/shared/lib';

export const rootReducer = combineReducers({
  [citySlice.name]: citySlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
