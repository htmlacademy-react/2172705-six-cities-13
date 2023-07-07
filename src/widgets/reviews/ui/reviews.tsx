import cn from 'classnames';

import { AddReviewForm } from '../../../features/addReviewForm';
import { Review } from '../../../entities/review';

type ReviewsProps = {
  sectionName: string;
}

export function Reviews({sectionName}: ReviewsProps) {
  return (
    <section className={cn(`${sectionName}__reviews`, 'reviews')}>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>

      <ul className="reviews__list">
        <Review
          userAvatarSrc='img/avatar-max.jpg'
          userName='Max'
          starsCount={4}
          text='A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
          date='2019-04-24'
        />
      </ul>

      <AddReviewForm />
    </section>
  );
}
