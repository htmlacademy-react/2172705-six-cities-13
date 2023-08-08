
import { Suspense } from 'react';
import Loader from '@/features/loader';
import { HistoryRouter } from '@/shared/lib';
import { browserHistory } from '../browser-history';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <HistoryRouter history={browserHistory}>
      <Suspense fallback={<Loader fullPage />}>
        <Component />
      </Suspense>
    </HistoryRouter>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
