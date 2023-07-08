import { SortPlaces } from '../../../features/sortPlaces';
import { AddToFavorite } from '../../../features/addToFavorite';
import { Card } from '../../../entities/card';

type CitiesProps = {
  offersCount: number;
}

export function Cities({offersCount}: CitiesProps) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offersCount} places to stay in Amsterdam`}</b>
          <SortPlaces />
          <div className="cities__places-list places__list tabs__content">
            {Array.from({ length: 5 }, (_, id) => id * 2).map((el) => (
              <Card
                key={el}
                sectionName='cities'
                imgSrc='img/apartment-01.jpg'
                priceValue={120}
                starsCount={4}
                name='Beautiful &amp; luxurious apartment at great location'
                type='Apartment'
                isPremium
                actionSlot={
                  <AddToFavorite
                    sectionName='place-card'
                    isFavorite={false}
                  />
                }
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
