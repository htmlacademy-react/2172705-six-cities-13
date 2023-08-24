import { Map, TileLayer } from 'leaflet';
import {
  useEffect,
  useState,
  MutableRefObject,
  useRef
} from 'react';
import { TileLayerSetup } from '../const';

export function useCreateMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType
): Nullable<Map> {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && city.location) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(TileLayerSetup.URL, {
        attribution: TileLayerSetup.Attribution
      });

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}
