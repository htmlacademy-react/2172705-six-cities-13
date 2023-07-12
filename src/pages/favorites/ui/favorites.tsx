import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Favorites } from '@/widgets/favorites';
import { Layout } from '@/shared/layouts';

export function FavoritesPage() {
  return (
    <Layout
      header={<Header />}
      content={<Favorites />}
      footer={<Footer />}
      pageName="favorites"
      title="6 cities: favorites"
    />
  );
}
