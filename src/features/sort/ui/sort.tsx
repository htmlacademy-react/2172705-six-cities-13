import clsx from 'clsx';
import { useState } from 'react';
import { SortType, getCurrentSortType } from '@/entities/offer';
import { useAppSelector, useOutsideClick } from '@/shared/lib';

type SortProps = {
  onSortTypeChange: (type: SortType) => void;
}

export function Sort({ onSortTypeChange }: SortProps) {
  const currentSortType = useAppSelector(getCurrentSortType);
  const [isOpenedSortOptions, setIsOpenedSortOptions] = useState(false);

  const handleSortTypeClick = () => setIsOpenedSortOptions(true);

  const handleSortTypeChange = (type: SortType) => {
    onSortTypeChange(type);
    setIsOpenedSortOptions(false);
  };

  const sortRef = useOutsideClick(() => setIsOpenedSortOptions(false));

  return (
    <div ref={sortRef}>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex={0}
          onClick={handleSortTypeClick}
        >
          {currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={clsx('places__options places__options--custom', { 'places__options--opened': isOpenedSortOptions })}>
          {Object.values(SortType).map((type) => (
            <li
              key={type}
              className={clsx('places__option', { 'places__option--active': type === currentSortType })}
              tabIndex={0}
              onClick={() => handleSortTypeChange(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
