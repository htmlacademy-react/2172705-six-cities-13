import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';

export function NearPlaces() {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {Array.from({ length: 3 }, (_, id) => id * 2).map((el) => (
            <Card
              key={el}
              sectionName="near-places"
              title="Wood and stone place"
              type="Private room"
              price={80}
              isPremium={false}
              rating={4}
              previewImage="img/room.jpg"
              actionSlot={<FavoriteButton sectionName="place-card" isFavorite />}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
