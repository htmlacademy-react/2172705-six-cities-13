import clsx from 'clsx';
import { useState } from 'react';
import { FavoriteButton } from '@/features/favoriteButton';
import Loader from '@/features/loader';
import { Map } from '@/features/map';
import { Sort } from '@/features/sort';
import { Card } from '@/entities/card';
import { changeSortType, SortType } from '@/entities/offer';
import { useAppSelector, useAppDispatch } from '@/shared/lib';
import { getCurrentOffers } from '../model/selectors';
import { CitiesNoPlaces } from './citiesNoPlaces';

export function Cities() {
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state.city.city);
  const offers = useAppSelector(getCurrentOffers);
  const isOffersLoading = useAppSelector((state) => state.offer.isOffersLoadingStatus);

  const [hoveredCard, setHoveredCard] = useState<Nullable<PreviewOfferType>>(null);

  const handleCardActive = (offer: Nullable<PreviewOfferType>) => setHoveredCard(offer);
  const handleSortTypeChange = (type: SortType) => dispatch(changeSortType({ sortType: type }));

  if (!offers.length) {
    return (
      <div className="cities">
        <div className={clsx('cities__places-container container', { 'cities__places-container--empty': (!isOffersLoading && !offers.length) })}>
          {isOffersLoading
            ?
            <>
              <section className="cities__places places">
                <Loader />
              </section>
              <div className="cities__right-section">
                <Map sectionName="cities" activeOffer={hoveredCard} offers={offers} />
              </div>
            </>
            : <CitiesNoPlaces city={city} />}
        </div>
      </div>
    );
  }

  return (
    <div className="cities">
      <div className={clsx('cities__places-container container')}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} ${offers.length > 1 ? 'places' : 'place'} to stay in ${city}`}</b>
          <Sort onSortTypeChange={handleSortTypeChange} />

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
      </div>
    </div>
  );
}
