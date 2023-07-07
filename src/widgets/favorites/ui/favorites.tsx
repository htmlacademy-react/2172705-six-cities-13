import { Card } from '../../../entities/card';
import { LinkItem } from '../../../shared/ui';

export function Favorites() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <LinkItem
                clss='locations__item-link'
                href='#'
                text='Amsterdam'
              />
            </div>
          </div>
          <div className="favorites__places">
            <Card
              sectionName='favorites'
              imgSrc='img/apartment-small-03.jpg'
              priceValue={180}
              starsCount={5}
              name='Nice, cozy, warm big bed apartment'
              type='Apartment'
              isFavorite
              isPremium
            />
            <Card
              sectionName='favorites'
              imgSrc='img/room-small.jpg'
              priceValue={80}
              starsCount={4}
              name='Wood and stone place'
              type='Private room'
              isFavorite
            />
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <LinkItem
                clss='locations__item-link'
                href='#'
                text='Cologne'
              />
            </div>
          </div>
          <div className="favorites__places">
            <Card
              sectionName='favorites'
              imgSrc='img/apartment-small-04.jpg'
              priceValue={180}
              starsCount={5}
              name='White castle'
              type='Apartment'
              isFavorite
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
