import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Favorites } from '@/widgets/favorites';
import { Layout } from '@/shared/layouts';

export function FavoritesPage() {
  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--favorites">
          <Favorites />
        </main>
      }
      footer={<Footer />}
      title="6 cities: favorites"
      className="page"
    />
  );
}
