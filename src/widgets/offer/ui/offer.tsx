import { MAX_IMAGES_COUNT } from '../const/const';

import { OpenedOfferType } from '@/global/types';

import { FavoriteButton } from '@/features/favoriteButton';
import { AddReviewForm } from '@/features/addReviewForm';
import { Map } from '@/features/map';
import { Review } from '@/entities/review';
import { Badge, StarsRatingInfo } from '@/shared/ui';
import { capitalizeWord } from '@/shared/lib';

type OfferProps = {
  offer: OpenedOfferType;
}

export function Offer({ offer }: OfferProps) {
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
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
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
              <span className="reviews__amount">1</span>
            </h2>
            <ul className="reviews__list">
              <Review
                date="2019-04-24"
                name="Max"
                avatarUrl="img/avatar-max.jpg"
                comment="A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century."
                rating={4}
              />
            </ul>
            <AddReviewForm />
          </section>
        </div>
      </div>

      <Map sectionName="offer" />
    </section>
  );
}
