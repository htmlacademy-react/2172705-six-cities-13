import { Header } from '@/widgets/header';
import { Offer } from '@/widgets/offer';
import { NearPlaces } from '@/widgets/nearPlaces';
import { Layout } from '@/shared/layouts';

export default function OfferPage() {
  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--offer">
          <Offer />
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
