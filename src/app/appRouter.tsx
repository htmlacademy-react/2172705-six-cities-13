import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/main';
import OfferPage from '@/pages/offer';
import { ScrollToTop, PrivateRoute, AuthorizationStatus } from '@/shared/lib';
import { AppRoute } from '@/const';

const LoginPage = lazy(() => import('@/pages/login'));
const FavoritesPage = lazy(() => import('@/pages/favorites'));
const NotFoundPage = lazy(() => import('@/pages/errors/notFound/notFoundPage'));

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesPage offers={[]} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage openedOffers={[]} previewOffers={[]} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
