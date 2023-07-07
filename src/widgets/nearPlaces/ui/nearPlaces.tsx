import { AddToFavorite } from '../../../features/addToFavorite';
import { Card } from '../../../entities/card';

export function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <Card
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
        <Card
          sectionName='near-places'
          imgSrc='img/apartment-02.jpg'
          priceValue={132}
          starsCount={4}
          name='Canal View Prinsengracht'
          type='Apartment'
          isPremium={false}
          actionSlot={
            <AddToFavorite
              sectionName='place-card'
              isFavorite={false}
            />
          }
        />
        <Card
          sectionName='near-places'
          imgSrc='img/apartment-03.jpg'
          priceValue={180}
          starsCount={5}
          name='Nice, cozy, warm big bed apartment'
          type='Apartment'
          isPremium
          actionSlot={
            <AddToFavorite
              sectionName='place-card'
              isFavorite={false}
            />
          }
        />
      </div>
    </section>
  );
}
