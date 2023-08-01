import clsx from 'clsx';
import { useState } from 'react';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import { Card } from '@/entities/card';
import { changeSortType, SortType } from '@/entities/offer';
import { useAppSelector, useAppDispatch } from '@/shared/lib';
import { getFilteredOffersByCity, getSortedOffers } from '../model/selectors';
import { CitiesNoPlaces } from './citiesNoPlaces';

export function Cities() {
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state.city.city);
  const currentSortType = useAppSelector((state) => state.offer.sortType);

  let offers;
  offers = useAppSelector(getFilteredOffersByCity);
  offers = useAppSelector(getSortedOffers);

  const [hoveredCard, setHoveredCard] = useState<Nullable<PreviewOfferType>>(null);
  const [isOpenedSortOptions, setIsOpenedSortOptions] = useState(false);

  const handleCardActive = (offer: Nullable<PreviewOfferType>) => setHoveredCard(offer);
  const handleSortTypeClick = () => setIsOpenedSortOptions(true);
  const handleSortTypeChange = (type: SortType) => {
    dispatch(changeSortType({ sortType: type }));
    setIsOpenedSortOptions(false);
  };

  return (
    <div className="cities">
      <div className={clsx('cities__places-container container', { 'cities__places-container--empty': !offers.length })}>
        {offers.length
          ? (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} ${offers.length > 1 ? 'places' : 'place'} to stay in ${city}`}</b>

                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span
                    className="places__sorting-type"
                    tabIndex={0}
                    onClick={handleSortTypeClick}
                  >
                    {currentSortType}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={clsx('places__options places__options--custom', { 'places__options--opened': isOpenedSortOptions })}>
                    {Object.values(SortType).map((type) => (
                      <li
                        key={type}
                        className={clsx('places__option', { 'places__option--active': type === currentSortType })}
                        tabIndex={0}
                        onClick={() => handleSortTypeChange(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </form>

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
          : <CitiesNoPlaces city={city} />}
      </div>
    </div>
  );
}
