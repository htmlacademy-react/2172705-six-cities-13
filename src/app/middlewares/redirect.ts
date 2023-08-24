import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { redirectToRoute } from '@/shared/lib';
import { browserHistory } from '../browser-history';
import { rootReducer } from '../store/root-reducer';
import { AppRoute } from '@/const';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<AppRoute>) => {
        if (action.type === redirectToRoute.toString()) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
