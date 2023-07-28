import { combineReducers } from '@reduxjs/toolkit';
import { tabsSlice } from './features/tabs';

export const rootReducer = combineReducers({
  [tabsSlice.name]: tabsSlice.reducer,
});
