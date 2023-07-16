import { PreviewOfferType } from '@/global/types';

import { Header } from '@/widgets/header';
import { Cities } from '@/widgets/cities';
import { Tabs } from '@/features/tabs';
import { Layout } from '@/shared/layouts';

type MainPageProps = {
  offers: PreviewOfferType[];
}

export default function MainPage({ offers }: MainPageProps) {
  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <Cities offers={offers} />
        </main>
      }
      footer={false}
      title="6 cities: main"
      className="page page--gray page__main--main"
    />
  );
}
