import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';

export function Favorites() {
  return (
    <div className="page__favorites-container container">
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
                sectionName="favorites"
                title="Nice, cozy, warm big bed apartment"
                type="Apartment"
                price={180}
                isPremium
                rating={5}
                previewImage="img/apartment-small-03.jpg"
                actionSlot={<FavoriteButton sectionName="place-card" isFavorite />}
              />
              <Card
                sectionName="favorites"
                title="Wood and stone place"
                type="Private room"
                price={80}
                isPremium={false}
                rating={4}
                previewImage="img/room-small.jpg"
                actionSlot={<FavoriteButton sectionName="place-card" isFavorite />}
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
                sectionName="favorites"
                title="White castle"
                type="Apartment"
                price={180}
                isPremium={false}
                rating={5}
                previewImage="img/apartment-small-04.jpg"
                actionSlot={<FavoriteButton sectionName="place-card" isFavorite />}
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
