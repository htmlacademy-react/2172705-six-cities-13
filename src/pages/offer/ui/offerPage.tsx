import { useParams } from 'react-router-dom';

import { OpenedOfferType } from '@/global/types';

import { Header } from '@/widgets/header';
import { Offer } from '@/widgets/offer';
import { NearPlaces } from '@/widgets/nearPlaces';
import { Layout } from '@/shared/layouts';

type OfferPageProps = {
  offers: OpenedOfferType[];
}

export default function OfferPage({ offers }: OfferPageProps) {
  const { id: offerId } = useParams();
  const offerItem = offers.find((offer) => offer.id === offerId);

  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--offer">
          <Offer offer={offerItem as OpenedOfferType} />
          <div className="container">
            <NearPlaces />
          </div>
        </main>
      }
      footer={false}
      title="6 cities: offer"
      className="page"
    />
  );
}
