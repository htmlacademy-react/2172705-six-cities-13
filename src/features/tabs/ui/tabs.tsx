import clsx from 'clsx';
import { changeCurrentCity } from '@/entities/city';
import { cities } from '@/entities/city/const';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

export function Tabs() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city.city);

  const handleTabItemClick = (city: CityTypes) => dispatch(changeCurrentCity({ city }));

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
