import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '@/global/const';
import { PreviewOfferType, OpenedOfferType, ReviewType } from '@/global/types';

import './app.module.css';

import MainPage from '@/pages/main/ui/main';
import OfferPage from '@/pages/offer/ui/offer';
import LoadingPage from '@/pages/loading/ui/loading';
import { ScrollToTop, PrivateRoute, AuthorizationStatus } from '@/shared/lib';

const LoginPage = lazy(() => import('@/pages/login/ui/login'));
const FavoritesPage = lazy(() => import('@/pages/favorites/ui/favorites'));
const Page404 = lazy(() => import('@/pages/404/ui/404'));

type AppProps = {
  previewOffers: PreviewOfferType[];
  openedOffers: OpenedOfferType[];
  reviews: ReviewType[];
}

export function App({ previewOffers, openedOffers, reviews }: AppProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path={AppRoute.Root} element={<MainPage offers={previewOffers} />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  );
}
