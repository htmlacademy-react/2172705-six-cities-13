import { Header } from '@/widgets/header';
import { Cities } from '@/widgets/cities';
import { Tabs } from '@/features/tabs';
import { Layout } from '@/shared/layouts';

type MainPageProps = {
  offersCount: number;
}

export function MainPage({ offersCount }: MainPageProps) {
  return (
    <Layout
      header={<Header />}
      content={
        <>
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <Cities offersCount={offersCount} />
        </>
      }
      pageName='main'
      className='page--gray page__main--main'
    />
  );
}
