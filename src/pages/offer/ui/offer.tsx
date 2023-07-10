import { Header } from '@/widgets/header';
import { Offer } from '@/widgets/offer';
import { NearPlaces } from '@/widgets/nearPlaces';
import { Layout } from '@/shared/layouts';

export function OfferPage() {
  return (
    <Layout
      header={<Header />}
      content={
        <>
          <Offer />
          <NearPlaces />
        </>
      }
      pageName='offer'
    />
  );
}
