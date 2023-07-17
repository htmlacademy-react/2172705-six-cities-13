type MapProps = {
  sectionName: string;
  offerId: string;
}

export function Map({ sectionName, offerId }: MapProps) {
  return (
    <section className={`${sectionName}__map map`}></section>
  );
}
