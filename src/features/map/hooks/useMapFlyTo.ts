import { Map } from 'leaflet';
import { useEffect } from 'react';
import { MAP_ZOOM } from '../const';

export const useMapFlyTo = (
  map: Nullable<Map>,
  city: CityType
) => {
  useEffect(() => {
    map?.flyTo(
      {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      MAP_ZOOM
    );
  }, [city]);
};
