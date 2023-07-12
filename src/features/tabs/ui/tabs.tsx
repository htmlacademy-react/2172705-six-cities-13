import { cities } from '../const/const';

export function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((name) => (
            <li key={name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${name === 'Paris' ? 'tabs__item--active' : ''}`}
                href="#"
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
