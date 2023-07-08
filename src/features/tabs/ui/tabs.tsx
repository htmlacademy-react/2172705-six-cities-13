const mockTabsInfo: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {mockTabsInfo.map((name) => (
            <li
              key={name}
              className="locations__item"
            >
              <a
                className={`locations__item-link tabs__item ${ name === 'Amsterdam' ? 'tabs__item--active' : ''}`}
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
