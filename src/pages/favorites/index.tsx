import clsx from 'clsx';
import { Favorites, EmptyFavorites } from '@/widgets/favorites';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { getFavoriteOffers } from '@/entities/offer';
import { Layout } from '@/shared/layouts';
import { useAppSelector } from '@/shared/lib';

export default function FavoritesPage() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isEmpty = favoriteOffers.length === 0;

  return (
    <Layout
      header={<Header />}
      content={
        <main className={clsx('page__main page__main--favorites', { 'page__main--favorites-empty': isEmpty })}>
          <div className="page__favorites-container container">
            {isEmpty
              ? <EmptyFavorites />
              : <Favorites offers={favoriteOffers} />}
          </div>
        </main>
      }
      footer={<Footer />}
      title="6 cities: favorites"
      wrapperClassName={clsx('page', { 'page--favorites-empty': isEmpty })}
    />
  );
}
