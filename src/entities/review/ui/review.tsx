import { DateFormat } from '../const/const';
import { StarsRating } from '../../../shared/ui';
import { convertDate } from '../../../shared/lib';

type ReviewProps = {
  userAvatarSrc: string;
  userName: string;
  starsCount: number;
  text: string;
  date: string;
}

export function Review({
  userAvatarSrc,
  userName,
  starsCount,
  text,
  date
}: ReviewProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatarSrc} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <StarsRating
          sectionName='reviews'
          starsCount={starsCount}
        />
        <p className="reviews__text">
          {text}
        </p>
        <time
          className="reviews__time"
          dateTime={convertDate(date, DateFormat.MachineReadableReviewDate)}
        >
          {convertDate(date, DateFormat.HumanReadableReviewDate)}
        </time>
      </div>
    </li>
  );
}
