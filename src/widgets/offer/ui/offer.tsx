import clsx from 'clsx';

import { MAX_IMAGES_COUNT } from '../const/const';

import { OpenedOfferType, PreviewOfferType } from '@/global/types';
import { reviews } from '@/global/mock/reviews';

import { FavoriteButton } from '@/features/favoriteButton';
import { AddReviewForm } from '@/features/addReviewForm';
import { Map } from '@/features/map';
import { Review } from '@/entities/review';
import { Badge, StarsRatingInfo } from '@/shared/ui';
import { capitalizeWord } from '@/shared/lib';

type OfferProps = {
  activeOffer: OpenedOfferType;
  offers: PreviewOfferType[];
}

export function Offer({ activeOffer, offers }: OfferProps) {
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {activeOffer.images.slice(0, MAX_IMAGES_COUNT).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>

      <div className="offer__container container">
        <div className="offer__wrapper">
          {activeOffer.isPremium && <Badge className="offer__mark" text="Premium" />}

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {activeOffer.title}
            </h1>
            <FavoriteButton sectionName="offer" isFavorite={activeOffer.isFavorite} />
          </div>

          <StarsRatingInfo
            sectionName="offer"
            rating={activeOffer.rating}
            hasAvgRating
          />

          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalizeWord(activeOffer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {activeOffer.bedrooms} {activeOffer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {activeOffer.maxAdults} {activeOffer.maxAdults === 1 ? 'adult' : 'adults'}
            </li>
          </ul>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{activeOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>

          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {activeOffer.goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>

          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={clsx('offer__avatar-wrapper user__avatar-wrapper', {'offer__avatar-wrapper--pro' : activeOffer.host.isPro})}>
                <img className="offer__avatar user__avatar" src={activeOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {activeOffer.host.name}
              </span>
              <span className="offer__user-status">
                {activeOffer.host.isPro && 'Pro'}
              </span>
            </div>
            <div className="offer__description">
              {activeOffer.description}
            </div>
          </div>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot;
              <span className="reviews__amount">{reviews.length}</span>
            </h2>
            <ul className="reviews__list">
              {reviews.map((review) => <Review key={review.id} review={review} />)}
            </ul>
            <AddReviewForm />
          </section>
        </div>
      </div>

      <Map sectionName="offer" activeOffer={activeOffer} offers={offers} />
    </section>
  );
}
