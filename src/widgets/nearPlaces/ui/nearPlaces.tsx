import { AddToFavorite } from '../../../features/addToFavorite';
import { Card } from '../../../entities/card';

export function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {Array.from({length: 3}, (_, id) => id * 2).map((el) => (
          <Card
            key={el}
            sectionName='near-places'
            imgSrc='img/room.jpg'
            priceValue={80}
            starsCount={4}
            name='Wood and stone place'
            type='Private room'
            isPremium={false}
            actionSlot={
              <AddToFavorite
                sectionName='place-card'
                isFavorite
              />
            }
          />
        ))}
      </div>
    </section>
  );
}
