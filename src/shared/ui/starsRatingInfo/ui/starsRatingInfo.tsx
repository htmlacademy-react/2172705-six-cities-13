import clsx from 'clsx';

import { getWidthByStarsCount } from '../lib/getWidthByStarsCount';

type StarsRatingProps = {
  sectionName: string;
  starsCount: number;
  numberRating?: number;
}

export function StarsRatingInfo({ sectionName, starsCount, numberRating }: StarsRatingProps) {
  return (
    <div className={clsx(`${sectionName}__rating`, 'rating')}>
      <div className={clsx(`${sectionName}__stars`, 'rating__stars')}>
        <span style={{ width: getWidthByStarsCount(starsCount) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {numberRating && (
        <span className={clsx(`${sectionName}__rating-value`, 'rating__value')}>
          {numberRating}
        </span>
      )}
    </div>
  );
}
