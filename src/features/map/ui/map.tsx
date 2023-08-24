import { useRef } from 'react';
import { useCreateMap } from '../hooks/use-create-map';
import { useCreateMapPins } from '../hooks/use-create-map-pins';
import { useMapSetView } from '../hooks/use-map-set-view';

type MapProps = {
  sectionName: string;
  activeOffer: Nullable<OpenedOfferType | PreviewOfferType>;
  offers: PreviewOfferType[];
}

export function Map({ sectionName, activeOffer, offers }: MapProps) {
  const mapRef = useRef(null);

  const city = {
    name: offers[0]?.city.name ?? activeOffer?.city.name,
    location: offers[0]?.city.location ?? activeOffer?.city.location
  };

  const map = useCreateMap(mapRef, city);
  useCreateMapPins(map, activeOffer, offers);
  useMapSetView(map, city);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
}
