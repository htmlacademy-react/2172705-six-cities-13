type MapProps = {
  sectionName: string;
  hoveredCardId: string;
}

export function Map({ sectionName, hoveredCardId }: MapProps) {
  if (hoveredCardId) {
    console.log(`Card ${hoveredCardId} is checked on map!`);
  }

  return (
    <section className={`${sectionName}__map map`}></section>
  );
}
