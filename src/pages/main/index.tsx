import clsx from 'clsx';
import { useEffect } from 'react';
import { Cities } from '@/widgets/cities';
import { Header } from '@/widgets/header';
import { Tabs } from '@/features/tabs';
import { fetchPreviewOffers, getPreviewOffers } from '@/entities/offer';
import { Layout } from '@/shared/layouts';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const previewOffers = useAppSelector(getPreviewOffers);

  useEffect(() => {
    dispatch(fetchPreviewOffers());
  }, []);

  return (
    <Layout
      header={<Header />}
      content={
        <main className={clsx('page__main page__main--index', { 'page__main--index-empty': !previewOffers.length })}>
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <Cities />
        </main>
      }
      footer={false}
      title="6 cities: main"
      wrapperClassName="page page--gray page--main"
    />
  );
}
