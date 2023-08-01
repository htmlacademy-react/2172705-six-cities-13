import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';
import { NEAR_PLACES_COUNT } from '../const';

type NearPlacesProps = {
  offers: PreviewOfferType[];
}

export function NearPlaces({ offers }: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {Array.from({length: NEAR_PLACES_COUNT}, (_, index) => offers[index]).map((offer) => (
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
