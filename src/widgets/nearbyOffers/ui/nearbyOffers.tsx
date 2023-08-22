import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';
import { getNearbyOffers } from '@/entities/offer';
import { useAppSelector } from '@/shared/lib';

export function NearbyOffers() {
  const nearbyOffers = useAppSelector(getNearbyOffers);

  if (!nearbyOffers.length) {
    return null;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            sectionName="near-places"
            actionSlot={
              <FavoriteButton
                sectionName="place-card"
                offerId={offer.id}
                isFavorite={offer.isFavorite}
              />
            }
          />
        ))}
      </div>
    </section>
  );
}
