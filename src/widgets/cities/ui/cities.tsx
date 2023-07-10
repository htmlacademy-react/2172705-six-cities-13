import { SortPlaces } from '@/features/sortPlaces';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import { Card } from '@/entities/card';

type CitiesProps = {
  offersCount: number;
}

export function Cities({ offersCount }: CitiesProps) {
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
                sectionName="cities"
                title="Beautiful &amp; luxurious apartment at great location"
                type="Apartment"
                price={120}
                isPremium
                rating={4}
                previewImage="img/apartment-01.jpg"
                actionSlot={<FavoriteButton sectionName="place-card" isFavorite={false} />}
              />
            ))}
          </div>
        </section>

        <Map sectionName="cities" />
      </div>
    </div>
  );
}
