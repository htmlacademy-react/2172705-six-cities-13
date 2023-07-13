type MapProps = {
  sectionName: string;
}

export function Map({ sectionName }: MapProps) {
  return (
    <section className={`${sectionName}__map map`}></section>
  );
}
