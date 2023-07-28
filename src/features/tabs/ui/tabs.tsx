import clsx from 'clsx';
import { useAppSelector, useAppDispatch } from '@/shared/model';
import { changeCity, changeRenderedOffers } from '../model/slice';
import { cities } from '@/global/const';
import { CitiesType } from '@/global/types';

export function Tabs() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.tabs.city);

  const handleTabItemClick = (city: CitiesType) => {
    dispatch(changeCity({ city }));
    dispatch(changeRenderedOffers({ city }));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((name) => (
            <li key={name} className="locations__item">
              <a
                className={clsx('locations__item-link tabs__item', { 'tabs__item--active': name === currentCity })}
                onClick={() => handleTabItemClick(name)}
              >
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
