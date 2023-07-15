import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from '@/global/const';

import './app.module.css';

import { MainPage } from '@/pages/main';
import { LoginPage } from '@/pages/login';
import { FavoritesPage } from '@/pages/favorites';
import { OfferPage } from '@/pages/offer';
import { Page404 } from '@/pages/404';
import { ScrollToTop, PrivateRoute } from '@/shared/lib';
import { AuthorizationStatus } from '@/shared/lib';

type AppProps = {
  offersCount: number;
}

export function App({ offersCount }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage offersCount={offersCount} />} />
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
  );
}
