import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

import './app.module.css';

import { AppRoute } from '@/global/const';
import { PreviewOfferType, OpenedOfferType } from '@/global/types';

import MainPage from '@/pages/main/ui/mainPage';
import OfferPage from '@/pages/offer/ui/offerPage';
import LoadingPage from '@/pages/loading/ui/loadingPage';
import { ScrollToTop, PrivateRoute, AuthorizationStatus } from '@/shared/lib';

const LoginPage = lazy(() => import('@/pages/login/ui/loginPage'));
const FavoritesPage = lazy(() => import('@/pages/favorites/ui/favoritesPage'));
const NotFoundPage = lazy(() => import('@/pages/errors/notFound/ui/notFoundPage'));
const FallbackPage = lazy(() => import('@/pages/errors/fallback/ui/fallbackPage'));

type AppProps = {
  previewOffers: PreviewOfferType[];
  openedOffers: OpenedOfferType[];
}

export function App({ previewOffers, openedOffers }: AppProps) {
  return (
    <ErrorBoundary fallback={<FallbackPage />}>
      <Suspense fallback={<LoadingPage />}>
        <HelmetProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path={AppRoute.Root} element={<MainPage offers={previewOffers} />} />
              <Route path={AppRoute.Login} element={<LoginPage />} />
              <Route path={AppRoute.Favorites} element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage offers={previewOffers} />
                </PrivateRoute>
              }
              />
              <Route path={AppRoute.Offer} element={<OfferPage openedOffers={openedOffers} previewOffers={previewOffers} />} />
              <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </Suspense>
    </ErrorBoundary >
  );
}
