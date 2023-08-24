import { FavoriteButton } from '@/features/favoriteButton';
import { Card } from '@/entities/card';
import { getSortedOffersByCity } from '../lib/get-sorted-offers-by-city';

type FavoritesProps = {
  offers: PreviewOfferType[];
}

export function Favorites({ offers }: FavoritesProps) {
  const favoriteOffers = getSortedOffersByCity(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object
          .entries(favoriteOffers)
          .map(([name, offersList]) => (
            <li key={name} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{name}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offersList.map((offer) => (
                  <Card
                    key={offer.id}
                    offer={offer}
                    sectionName="favorites"
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
            </li>
          ))}
      </ul>
    </section>
  );
}
