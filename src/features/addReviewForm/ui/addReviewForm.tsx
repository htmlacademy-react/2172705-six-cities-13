import {useState} from 'react';

import { ratings } from '../const/const';

import { Button, RatingFormStarItem } from '@/shared/ui';

export function AddReviewForm() {
  const [reviewData, setReviewData] = useState({
    text: '',
    rating: 0
  });

  const handleReviewDataChange = (name: keyof typeof reviewData, value: typeof reviewData[keyof typeof reviewData]) => setReviewData({
    ...reviewData,
    [name]: value
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, status }) => (
          <RatingFormStarItem
            key={status}
            value={value}
            status={status}
            onChange={(evt) => handleReviewDataChange('rating', evt.target.value)}
          />))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.text}
        onChange={(evt) => handleReviewDataChange('text', evt.target.value)}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          {' '}and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <Button className="reviews__submit form__submit" type="submit" disabled>Submit</Button>
      </div>
    </form>
  );
}
