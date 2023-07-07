import { ratings } from '../const/const';

export function AddReviewForm() {
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, status }) => {
          const starsCountString = value > 1 ? `${value}-stars` : '1-star';

          return (
            <>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={starsCountString}
                type="radio"
              />
              <label
                htmlFor={starsCountString}
                className="reviews__rating-label form__rating-label"
                title={status}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set&ensp;
          <span className="reviews__star">rating</span>
          &ensp;and describe your stay with at least&ensp;
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
