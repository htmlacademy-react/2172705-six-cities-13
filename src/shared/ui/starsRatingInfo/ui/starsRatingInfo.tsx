import clsx from 'clsx';

import { getWidthByStarsCount } from '../lib/getWidthByStarsCount';

type StarsRatingInfoProps = {
  sectionName: string;
  rating: number;
  isStarsRatingRounded?: boolean;
  hasAvgRating?: boolean;
}

export function StarsRatingInfo({ sectionName, rating, isStarsRatingRounded = true, hasAvgRating = false }: StarsRatingInfoProps) {
  const avgRating = rating;

  if (isStarsRatingRounded) {
    rating = Math.round(rating);
  }

  return (
    <div className={clsx(`${sectionName}__rating`, 'rating')}>
      <div className={clsx(`${sectionName}__stars`, 'rating__stars')}>
        <span style={{ width: getWidthByStarsCount(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {hasAvgRating && (
        <span className={clsx(`${sectionName}__rating-value`, 'rating__value')}>
          {avgRating}
        </span>
      )}
    </div>
  );
}
