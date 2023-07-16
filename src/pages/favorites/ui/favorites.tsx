import clsx from 'clsx';

import { calcFavoritesCount } from '../lib/calcFavoritesCount';

import { PreviewOfferType } from '@/global/types';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Favorites, EmptyFavorites } from '@/widgets/favorites';
import { Layout } from '@/shared/layouts';

type FavoritesPageProps = {
  offers: PreviewOfferType[];
}

export default function FavoritesPage({ offers }: FavoritesPageProps) {
  const favoritesCount = calcFavoritesCount(offers);
  const isEmpty = favoritesCount === 0;

  return (
    <Layout
      header={<Header />}
      content={
        <main className={clsx('page__main page__main--favorites', { 'page__main--favorites-empty': isEmpty })}>
          <div className="page__favorites-container container">
            {isEmpty
              ? <EmptyFavorites />
              : <Favorites offers={offers} />}
          </div>
        </main>
      }
      footer={<Footer />}
      title="6 cities: favorites"
      className={clsx('page', { 'page--favorites-empty': isEmpty })}
    />
  );
}
