import { ChangeEvent } from 'react';

interface RatingFormStarItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  status: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export function RatingFormStarItem({ value, status, onChange }: RatingFormStarItemProps) {
  const starsCountString = value > 1 ? `${value}-stars` : '1-star';

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={starsCountString}
        type="radio"
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
