import { useRef } from 'react';
import { useMap } from '../hooks/useMap';
import { useMapPins } from '../hooks/useMapPins';

type MapProps = {
  sectionName: string;
  activeOffer: Nullable<OpenedOfferType | PreviewOfferType>;
  offers: PreviewOfferType[];
}

export function Map({ sectionName, activeOffer, offers }: MapProps) {
  const mapRef = useRef(null);
  const city = offers.length
    ?
    {
      name: offers[0].city.name,
      location: offers[0].city.location
    }
    : null;

  const map = useMap(mapRef, city);
  useMapPins(map, activeOffer, offers);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
}
