import { Map, TileLayer } from 'leaflet';
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { MAP_ZOOM, TileLayerSetup } from '../const';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Nullable<CityType>
): Nullable<Map> {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && city) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: MAP_ZOOM
      });

      const layer = new TileLayer(TileLayerSetup.URL, {
        attribution: TileLayerSetup.Attribution
      });

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
