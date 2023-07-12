import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';

type LayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  pageName: string;
  title: string;
  className?: string;
}

export function Layout({ header, footer, className, pageName, title, content }: LayoutProps) {
  const mainSectionModifier = pageName === 'main' ? 'index' : pageName;

  return (
    <div className={clsx('page', className)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {header}

      <main className={clsx('page__main', pageName && `page__main--${mainSectionModifier}`)}>
        {content}
      </main>

      {footer}
    </div >
  );
}
