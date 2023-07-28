import { useRef } from 'react';
import { useMap } from '../hooks/useMap';
import { useMapPins } from '../hooks/useMapPins';
import { OpenedOfferType, PreviewOfferType } from '@/global/types';

type MapProps = {
  sectionName: string;
  activeOffer: Nullable<OpenedOfferType | PreviewOfferType>;
  offers: PreviewOfferType[];
}

export function Map({ sectionName, activeOffer, offers }: MapProps) {
  const mapRef = useRef(null);

  const city = {
    name: offers[0].city.name,
    location: offers[0].city.location
  };

  const map = useMap(mapRef, city);
  useMapPins(map, activeOffer, offers);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
}
