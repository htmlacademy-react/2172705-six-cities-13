import clsx from 'clsx';
import { useState } from 'react';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import { Sort } from '@/features/sort';
import { Card } from '@/entities/card';
import { getCurrentCity } from '@/entities/city';
import {
  changeSortType,
  getPreviewOffersStatus,
  SortType
} from '@/entities/offer';
import { useAppSelector, useAppDispatch } from '@/shared/lib';
import { ClockLoader } from '@/shared/ui';
import { getCurrentOffers } from '../model/selectors';
import { CitiesNoPlaces } from './citiesNoPlaces';
import { CitiesRejectedQuestionsFetch } from './citiesRejectedQuestionsFetch';

export function Cities() {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCurrentCity);
  const previewOffers = useAppSelector(getCurrentOffers);
  const previewOffersStatus = useAppSelector(getPreviewOffersStatus);

  const [hoveredCard, setHoveredCard] = useState<Nullable<PreviewOfferType>>(null);

  const handleCardActive = (offer: Nullable<PreviewOfferType>) => setHoveredCard(offer);
  const handleSortTypeChange = (type: SortType) => dispatch(changeSortType({ sortType: type }));

  if (previewOffersStatus.isPending) {
    return (
      <div className="cities">
        <div className="container">
          <ClockLoader text="Loading offers..." />
        </div>
      </div>
    );
  }

  if (previewOffersStatus.isRejected) {
    return (
      <div className="cities">
        <div className="container">
          <CitiesRejectedQuestionsFetch />
        </div>
      </div>
    );
  }

  return (
    <div className="cities">
      <div className={clsx('cities__places-container container', { 'cities__places-container--empty': !previewOffers.length })}>
        {previewOffers.length
          ? (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${previewOffers.length} ${previewOffers.length > 1 ? 'places' : 'place'} to stay in ${currentCity}`}</b>
                <Sort onSortTypeChange={handleSortTypeChange} />

                <div className="cities__places-list places__list tabs__content">
                  {previewOffers.map((offer) => (
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
                <Map sectionName="cities" activeOffer={hoveredCard} offers={previewOffers} />
              </div>
            </>
          )
          : <CitiesNoPlaces city={currentCity} />}
      </div>
    </div>
  );
}
