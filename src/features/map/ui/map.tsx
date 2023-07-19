type MapProps = {
  sectionName: string;
  offerId: Nullable<string>;
}

export function Map({ sectionName, offerId }: MapProps) {
  return (
    <section className={`${sectionName}__map map`}></section>
  );
}
