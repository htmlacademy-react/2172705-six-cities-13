import dayjs from 'dayjs';

import { StarsRatingInfo } from '@/shared/ui';
import { ReviewType, UserType } from '@/global/types';

//! Временное решение
type ReviewProps = Pick<ReviewType, 'date' | 'comment' | 'rating'> & Pick<UserType, 'avatarUrl' | 'name'>;

export function Review({
  date,
  name,
  avatarUrl,
  comment,
  rating,
}: ReviewProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>

      <div className="reviews__info">
        <StarsRatingInfo sectionName="reviews" rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}
