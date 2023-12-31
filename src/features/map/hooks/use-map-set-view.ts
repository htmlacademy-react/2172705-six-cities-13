import { Map } from 'leaflet';
import { useEffect } from 'react';

export const useMapSetView = (
  map: Nullable<Map>,
  city: CityType
) => {
  useEffect(() => {
    map?.setView(
      {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      city.location.zoom
    );
  }, [city]);
};
