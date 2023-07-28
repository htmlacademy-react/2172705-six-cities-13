import clsx from 'clsx';
import { useState } from 'react';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import { SortPlaces } from '@/features/sortPlaces';
import { Card } from '@/entities/card';
import { useAppSelector } from '@/shared/model';
import { PreviewOfferType } from '@/global/types';

export function Cities() {
  const city = useAppSelector((state) => state.tabs.city);
  const offers = useAppSelector((state) => state.tabs.renderedOffers);
  const [hoveredCard, setHoveredCard] = useState<Nullable<PreviewOfferType>>(null);

  const handleCardActive = (offer: Nullable<PreviewOfferType>) => setHoveredCard(offer);

  return (
    <div className="cities">
      <div className={clsx('cities__places-container container', {'cities__places-container--empty': !offers.length})}>
        {offers.length
          ? (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} ${offers.length > 1 ? 'places' : 'place'} to stay in ${city}`}</b>
                <SortPlaces />
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer) => (
                    <Card
                      key={offer.id}
                      offer={offer}
                      sectionName="cities"
                      onCardActive={handleCardActive}
                      actionSlot={<FavoriteButton sectionName="place-card" isFavorite={false} />}
                    />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <Map sectionName="cities" activeOffer={hoveredCard} offers={offers} />
              </div>
            </>
          )
          : (
            <>
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section><div className="cities__right-section"></div>
            </>
          )}
      </div>
    </div>
  );
}
