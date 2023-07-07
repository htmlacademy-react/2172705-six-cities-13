import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import { Favorites } from '../../widgets/favorites';

export function FavoritesPage() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites />
        </div>
      </main>

      <Footer />
    </div>
  );
}
