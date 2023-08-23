import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { capitalizeWord } from '@/shared/lib';
import { Badge, StarsRatingInfo } from '@/shared/ui';
import { getImageSize } from '../lib/getImageSize';
import { AppRoute } from '@/const';

type CardProps = {
  offer: PreviewOfferType;
  sectionName: string;
  onCardActive?: (offer: Nullable<PreviewOfferType>) => void;
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
      onMouseEnter={() => onCardActive?.(offer)}
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
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
