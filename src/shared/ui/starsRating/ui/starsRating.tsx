import cn from 'classnames';

import { getWidthByStarsCount } from '../lib/getWidthByStarsCount';

type StarsRatingProps = {
  sectionName: string;
  starsCount: number;
}

export function StarsRating({sectionName, starsCount}: StarsRatingProps) {
  return (
    <div className={cn(`${sectionName}__rating`, 'rating')}>
      <div className={cn(`${sectionName}__stars`, 'rating__stars')}>
        <span style={{width: getWidthByStarsCount(starsCount)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
