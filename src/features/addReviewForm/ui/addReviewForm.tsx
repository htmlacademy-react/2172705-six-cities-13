import {
  ChangeEvent,
  FormEvent,
  useState
} from 'react';
import { addReview, getAddReviewStatusObj } from '@/entities/review';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import {
  Button,
  RatingFormStarItem,
  RingLoader
} from '@/shared/ui';
import { ratings } from '../const';

type AddReviewFormProps = {
  offerId: string;
}

export function AddReviewForm({ offerId }: AddReviewFormProps) {
  const dispatch = useAppDispatch();
  const addReviewStatus = useAppSelector(getAddReviewStatusObj);

  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: '0'
  });

  const clearForm = () => setReviewData({
    comment: '',
    rating: '0'
  });

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(addReview({
      comment: reviewData.comment,
      rating: Number(reviewData.rating),
      offerId,
    }))
      .unwrap()
      .then(clearForm);
  };

  const handleReviewDataChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReviewData({
    ...reviewData,
    [evt.target.name]: evt.target.value
  });

  const isFormValid = Number(reviewData.rating) > 0 && reviewData.comment.length >= 50;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, status }) => (
          <RatingFormStarItem
            key={status}
            value={value}
            required
            disabled={addReviewStatus.isPending}
            checked={value === reviewData.rating}
            status={status}
            onChange={handleReviewDataChange}
          />))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.comment}
        disabled={addReviewStatus.isPending}
        required
        maxLength={300}
        onChange={handleReviewDataChange}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          {' '}and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <Button
          className="reviews__submit form__submit"
          type="submit"
          disabled={addReviewStatus.isPending || !isFormValid}
        >
          {addReviewStatus.isPending ? <RingLoader /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
}
