import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { getImageSize } from '../lib';
import { Badge, StarsRatingInfo } from '@/shared/ui';
import { FullOfferType } from '@/shared/types';

//! Временное решение
type CardProps = Pick<FullOfferType, (
  'title' |
  'type' |
  'price' |
  'isPremium' |
  'rating' |
  'previewImage'
)> & {
  sectionName: string;
  actionSlot?: ReactNode;
}

export function Card({
  sectionName,
  title,
  type,
  price,
  isPremium,
  rating,
  previewImage,
  actionSlot
}: CardProps) {
  const imageSize = getImageSize(sectionName);

  return (
    <article className={clsx(`${sectionName}__card`, 'place-card')}>
      {isPremium && <Badge className='place-card__mark' text='Premium' />}

      <div className={clsx(`${sectionName}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to="#todo">
          <img
            className="place-card__image"
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={clsx(`${sectionName}__card-info`, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {actionSlot}
        </div>
        <StarsRatingInfo sectionName="place-card" starsCount={rating} />
        <h2 className="place-card__name">
          <Link to="#todo">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
