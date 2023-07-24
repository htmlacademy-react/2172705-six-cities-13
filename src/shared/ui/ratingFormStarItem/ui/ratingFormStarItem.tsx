import { ChangeEvent } from 'react';

type RatingFormStarItemProps = {
  value: string;
  status: string;
  isChecked: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export function RatingFormStarItem({ value, status, isChecked, onChange }: RatingFormStarItemProps) {
  const starsCountString = Number(value) > 1 ? `${value}-stars` : '1-star';

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={starsCountString}
        type="radio"
        checked={isChecked}
        onChange={onChange}
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
}
