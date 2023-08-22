import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { NearbyOffers } from '@/widgets/nearbyOffers';
import { Offer } from '@/widgets/offer';
import { fetchCurrentOffer, fetchNearbyOffers } from '@/entities/offer';
import { fetchReviews } from '@/entities/review';
import { Layout } from '@/shared/layouts';
import { useAppDispatch } from '@/shared/lib';

export default function OfferPage() {
  const dispatch = useAppDispatch();
  const { id: offerId } = useParams();

  useEffect(() => {
    dispatch(fetchCurrentOffer(String(offerId)));
    dispatch(fetchReviews(String(offerId)));
    dispatch(fetchNearbyOffers(String(offerId)));
  }, [offerId]);

  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--offer">
          <Offer />

          <div className="container">
            <NearbyOffers />
          </div>
        </main>
      }
      footer={false}
      title="6 cities: offer"
      wrapperClassName="page"
    />
  );
}
