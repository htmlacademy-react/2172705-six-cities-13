import clsx from 'clsx';
import { Navigate } from 'react-router-dom';
import { AddReviewForm } from '@/features/addReviewForm';
import { getLoginStatusObj, getCurrentUserStatusObj } from '@/features/authorization';
import { FavoriteButton } from '@/features/favoriteButton';
import { Map } from '@/features/map';
import {
  getCurrentOffer,
  getCurrentOfferStatusObj,
  getNearbyOffers,
  getNearbyOffersStatusObj
} from '@/entities/offer';
import {
  Review,
  getReviewStatusObj,
  getReviews,
  getCurrentReviews
} from '@/entities/review';
import { capitalizeWord, useAppSelector } from '@/shared/lib';
import {
  Badge,
  ClockLoader,
  StarsRatingInfo
} from '@/shared/ui';
import { MAX_IMAGES_COUNT } from '../const';
import { AppRoute } from '@/const';

export function Offer() {
  const loginStatus = useAppSelector(getLoginStatusObj);
  const currentUserStatus = useAppSelector(getCurrentUserStatusObj);
  const offer = useAppSelector(getCurrentOffer);
  const offerStatus = useAppSelector(getCurrentOfferStatusObj);

  const reviewsTotalCount = useAppSelector(getReviews).length;
  const currentReviews = useAppSelector(getCurrentReviews);
  const reviewStatus = useAppSelector(getReviewStatusObj);

  const nearbyOffers = useAppSelector(getNearbyOffers);
  const nearbyOffersStatus = useAppSelector(getNearbyOffersStatusObj);

  if (offerStatus.isUncompleted || reviewStatus.isUncompleted || nearbyOffersStatus.isUncompleted) {
    return <ClockLoader text="Loading offers data..." fullPage />;
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.slice(0, MAX_IMAGES_COUNT).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>

      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium && <Badge className="offer__mark" text="Premium" />}

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <FavoriteButton sectionName="offer" isFavorite={offer.isFavorite} />
          </div>

          <StarsRatingInfo
            sectionName="offer"
            rating={offer.rating}
            hasAvgRating
          />

          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalizeWord(offer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} {offer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxAdults} {offer.maxAdults === 1 ? 'adult' : 'adults'}
            </li>
          </ul>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>

          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>

          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={clsx('offer__avatar-wrapper user__avatar-wrapper', { 'offer__avatar-wrapper--pro': offer.host.isPro })}>
                <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {offer.host.name}
              </span>
              <span className="offer__user-status">
                {offer.host.isPro && 'Pro'}
              </span>
            </div>
            <div className="offer__description">
              {offer.description}
            </div>
          </div>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot;
              <span className="reviews__amount">{reviewsTotalCount}</span>
            </h2>

            {!!reviewsTotalCount && (
              <ul className="reviews__list">
                {currentReviews.map((review) => <Review key={review.id} review={review} />)}
              </ul>
            )}

            {!!(loginStatus.isFulfilled || currentUserStatus.isFulfilled) && (
              <AddReviewForm offerId={offer.id} />
            )}
          </section>
        </div>
      </div>

      <Map sectionName="offer" activeOffer={offer} offers={nearbyOffers} />
    </section>
  );
}
