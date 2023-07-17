//! Временно, чтобы не ломало работу приложения
import { previewOffers } from '@/global/mock/previewOffers';

import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';

export function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {previewOffers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            sectionName="near-places"
            actionSlot={<FavoriteButton sectionName="place-card" isFavorite />}
          />
        ))}
      </div>
    </section>
  );
}
