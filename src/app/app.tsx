import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { MainPage } from '@/pages/main';
import { LoginPage } from '@/pages/login';
import { FavoritesPage } from '@/pages/favorites';
import { OfferPage } from '@/pages/offer';
import { Page404 } from '@/pages/404';
import { ScrollToTop, PrivateRoute } from '@/shared/lib';

type AppProps = {
  offersCount: number;
}

export function App({ offersCount }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" >
            <Route index element={<MainPage offersCount={offersCount} />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="offer/:id" element={
              <PrivateRoute authorizationStatus="NO_AUTH">
                <OfferPage />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
