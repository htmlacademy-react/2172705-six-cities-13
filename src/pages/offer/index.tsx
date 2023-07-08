import { Header } from '../../widgets/header';
import { Offer } from '../../widgets/offer';
import { NearPlaces } from '../../widgets/nearPlaces';

export function OfferPage() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <Offer />
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}
