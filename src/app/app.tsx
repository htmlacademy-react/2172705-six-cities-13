import { MainPage } from '@/pages/main';
import { LoginPage } from '@/pages/login';
import { FavoritesPage } from '@/pages/favorites';
import { OfferPage } from '@/pages/offer';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps) {
  return (
    <div>
      <MainPage offersCount={offersCount} />
      <LoginPage />
      <FavoritesPage />
      <OfferPage />
    </div>
  );
}

export default App;
