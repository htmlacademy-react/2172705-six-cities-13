//! Временно, чтобы не ломало работу приложения
import { previewOffers } from '@/global/mock/previewOffers';

import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';

export function Favorites() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <Card
              offer={previewOffers[0]}
              sectionName="favorites"
              actionSlot={<FavoriteButton sectionName="place-card" isFavorite={previewOffers[0].isFavorite} />}
            />
            <Card
              offer={previewOffers[1]}
              sectionName="favorites"
              actionSlot={<FavoriteButton sectionName="place-card" isFavorite={previewOffers[1].isFavorite} />}
            />
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <Card
              offer={previewOffers[2]}
              sectionName="favorites"
              actionSlot={<FavoriteButton sectionName="place-card" isFavorite={previewOffers[2].isFavorite} />}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
