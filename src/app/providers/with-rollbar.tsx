import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import FallbackPage from '@/pages/errors/fallback/fallbackPage';
import { rollbarConfig } from '../config/rollbar';

export const withRollbar = (Component: Component) => {
  const DecoratedComponent = () => (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary fallbackUI={FallbackPage}>
        <Component />
      </ErrorBoundary>
    </RollbarProvider>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
