import { ReactNode } from 'react';
import cn from 'classnames';

import { getImageSize } from '../lib';
import { Badge, StarsRating } from '../../../shared/ui';

type CardProps = {
  sectionName: string;
  imgSrc: string;
  priceValue: number;
  starsCount: number;
  name: string;
  type: string;
  isPremium: boolean;
  actionSlot?: ReactNode;
}

export function Card({
  sectionName,
  imgSrc,
  priceValue,
  starsCount,
  name,
  type,
  isPremium,
  actionSlot
}: CardProps) {
  const imageSize = getImageSize(sectionName);

  return (
    <article className={cn(`${sectionName}__card`, 'place-card')}>
      {isPremium && (
        <Badge
          clss='place-card__mark'
          text='Premium'
        />
      )}

      <div className={cn(`${sectionName}__image-wrapper`, 'place-card__image-wrapper')}>
        <a href="#">
          <img
            className="place-card__image"
            src={imgSrc}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={cn(`${sectionName}__card-info`, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {actionSlot}
        </div>
        <StarsRating
          sectionName='place-card'
          starsCount={starsCount}
        />
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
