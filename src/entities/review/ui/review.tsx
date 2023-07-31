import dayjs from 'dayjs';
import { StarsRatingInfo } from '@/shared/ui';

type ReviewProps = {
  review: ReviewType;
}

export function Review({ review }: ReviewProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>

      <div className="reviews__info">
        <StarsRatingInfo sectionName="reviews" rating={review.rating} />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>
          {dayjs(review.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}
