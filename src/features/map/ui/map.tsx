import clsx from 'clsx';

type MapProps = {
  sectionName: string;
}

export function Map({ sectionName }: MapProps) {
  return (
    <div className={clsx({ 'cities__right-section': sectionName === 'cities' })}>
      <section className={`${sectionName}__map map`}></section>
    </div>
  );
}
