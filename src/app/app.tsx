import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './styles/app.module.css';
import LoadingPage from '@/pages/loading';
import { rollbarConfig } from './config/rollbar';
import { Routing } from './routes';

const FallbackPage = lazy(() => import('@/pages/errors/fallback/fallbackPage'));

export function App() {
  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary fallbackUI={FallbackPage}>
        <Suspense fallback={<LoadingPage />}>
          <HelmetProvider>
            <Routing />
          </HelmetProvider>
        </Suspense>
      </ErrorBoundary >
    </RollbarProvider>
  );
}
