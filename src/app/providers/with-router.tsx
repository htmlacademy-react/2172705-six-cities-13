
import { Suspense } from 'react';
import { HistoryRouter } from '@/shared/lib';
import { ClockLoader } from '@/shared/ui';
import { browserHistory } from '../browser-history';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <HistoryRouter history={browserHistory}>
      <Suspense fallback={<ClockLoader fullPage />}>
        <Component />
      </Suspense>
    </HistoryRouter>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
