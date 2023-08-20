import { Icon, Marker, layerGroup, Map, BaseIconOptions } from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { IconSetup } from '../const';

export function useCreateMapPins(
  map: Nullable<Map>,
  activeOffer: Nullable<OpenedOfferType | PreviewOfferType>,
  offers: PreviewOfferType[]
) {
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const defaultMarker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        defaultMarker
          .setIcon(new Icon(IconSetup.Default as BaseIconOptions))
          .addTo(markerLayer);
      });

      if (activeOffer) {
        const activeMarker = new Marker({
          lat: activeOffer.location.latitude,
          lng: activeOffer.location.longitude
        });

        activeMarker
          .setIcon(new Icon(IconSetup.Active as BaseIconOptions))
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);
}
