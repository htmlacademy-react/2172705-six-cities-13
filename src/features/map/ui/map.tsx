import { useRef } from 'react';
import { useCreateMap } from '../hooks/useCreateMap';
import { useCreateMapPins } from '../hooks/useCreateMapPins';
import { useMapFlyTo } from '../hooks/useMapFlyTo';

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
  useMapFlyTo(map, city);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
}
