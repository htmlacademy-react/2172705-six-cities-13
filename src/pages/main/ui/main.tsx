import { Header } from '@/widgets/header';
import { Cities } from '@/widgets/cities';
import { Tabs } from '@/features/tabs';
import { Layout } from '@/shared/layouts';

type MainPageProps = {
  offersCount: number;
}

export default function MainPage({ offersCount }: MainPageProps) {
  return (
    <Layout
      header={<Header />}
      content={
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <Cities offersCount={offersCount} />
        </main>
      }
      footer={false}
      title="6 cities: main"
      className="page page--gray page__main--main"
    />
  );
}
