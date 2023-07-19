import { ReactNode } from 'react';
import { Link, generatePath } from 'react-router-dom';
import clsx from 'clsx';

import { getImageSize } from '../lib/getImageSize';

import { AppRoute } from '@/global/const';
import { PreviewOfferType } from '@/global/types';

import { Badge, StarsRatingInfo } from '@/shared/ui';
import { capitalizeWord } from '@/shared/lib';

type CardProps = {
  offer: PreviewOfferType;
  sectionName: string;
  onCardActive?: (id: Nullable<string>) => void;
  actionSlot?: ReactNode;
}

export function Card({
  offer,
  sectionName,
  onCardActive,
  actionSlot
}: CardProps) {
  const imageSize = getImageSize(sectionName);

  return (
    <article
      className={clsx(`${sectionName}__card`, 'place-card')}
      onMouseEnter={() => onCardActive?.(offer.id)}
      onMouseLeave={() => onCardActive?.(null)}
    >
      {offer.isPremium && <Badge className='place-card__mark' text='Premium' />}

      <div className={clsx(`${sectionName}__image-wrapper`, 'place-card__image-wrapper')}>
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={clsx(`${sectionName}__card-info`, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {actionSlot}
        </div>
        <StarsRatingInfo sectionName="place-card" rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeWord(offer.type)}</p>
      </div>
    </article>
  );
}
