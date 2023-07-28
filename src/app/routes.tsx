import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/main';
import OfferPage from '@/pages/offer';
import { ScrollToTop, PrivateRoute, AuthorizationStatus } from '@/shared/lib';
import { AppRoute } from '@/global/const';
import { openedOffers } from '@/global/mock/openedOffers';
import { previewOffers } from '@/global/mock/previewOffers';

const LoginPage = lazy(() => import('@/pages/login'));
const FavoritesPage = lazy(() => import('@/pages/favorites'));
const NotFoundPage = lazy(() => import('@/pages/errors/notFound/notFoundPage'));

export function Routing() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesPage offers={previewOffers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage openedOffers={openedOffers} previewOffers={previewOffers}/>} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
