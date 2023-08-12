import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '@/shared/api';
import { redirect } from '../middlewares/redirect';
import { rootReducer } from './rootReducer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  }).concat(redirect)
});
