import { useParams } from 'react-router-dom';

import { OpenedOfferType, PreviewOfferType } from '@/global/types';

import { Header } from '@/widgets/header';
import { Offer } from '@/widgets/offer';
import { NearPlaces } from '@/widgets/nearPlaces';
import { Layout } from '@/shared/layouts';

type OfferPageProps = {
  openedOffers: OpenedOfferType[];
  previewOffers: PreviewOfferType[];
}

export default function OfferPage({ openedOffers, previewOffers}: OfferPageProps) {
  const { id: offerId } = useParams();

  const offerItem = openedOffers.find((offer) => offer.id === offerId);
  const nearPlaces = previewOffers;

  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--offer">
          <Offer activeOffer={offerItem as OpenedOfferType} offers={nearPlaces} />

          <div className="container">
            <NearPlaces offers={nearPlaces} />
          </div>
        </main>
      }
      footer={false}
      title="6 cities: offer"
      className="page"
    />
  );
}
