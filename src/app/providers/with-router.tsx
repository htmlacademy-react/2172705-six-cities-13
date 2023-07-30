import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from '@/pages/loading';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
