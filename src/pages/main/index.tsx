import { Header } from '../../widgets/header';
import { Cities } from '../../widgets/cities';
import { Tabs } from '../../features/tabs';

type MainPageProps = {
  offersCount: number;
}

export function MainPage({ offersCount }: MainPageProps) {
  return (
    <div className="page page--gray page--main">
      <Header
        isMainPage
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities
          offersCount={offersCount}
        />
      </main>
    </div>
  );
}
