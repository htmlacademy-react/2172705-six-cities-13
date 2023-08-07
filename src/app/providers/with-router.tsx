import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from '@/features/loader';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <BrowserRouter>
      <Suspense fallback={<Loader fullPage />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
