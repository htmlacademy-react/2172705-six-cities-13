import { useParams, Navigate } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { NearPlaces } from '@/widgets/nearPlaces';
import { Offer } from '@/widgets/offer';
import { Layout } from '@/shared/layouts';
import { AppRoute } from '@/global/const';
import { OpenedOfferType, PreviewOfferType } from '@/global/types';

type OfferPageProps = {
  openedOffers: OpenedOfferType[];
  previewOffers: PreviewOfferType[];
}

export default function OfferPage({ openedOffers, previewOffers }: OfferPageProps) {
  const { id: offerId } = useParams();

  const nearPlaces = previewOffers;
  const offerItem = openedOffers.find((offer) => offer.id === offerId);

  if (!offerItem) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--offer">
          <Offer activeOffer={offerItem} offers={nearPlaces} />

          <div className="container">
            <NearPlaces offers={nearPlaces} />
          </div>
        </main>
      }
      footer={false}
      title="6 cities: offer"
      wrapperClassName="page"
    />
  );
}
