import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Favorites } from '@/widgets/favorites';
import { Layout } from '@/shared/layouts';

export default function FavoritesPage() {
  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <Favorites />
          </div>
        </main>
      }
      footer={<Footer />}
      title="6 cities: favorites"
      className="page"
    />
  );
}
