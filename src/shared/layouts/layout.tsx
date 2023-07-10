import { ReactElement } from 'react';
import clsx from 'clsx';

type LayoutProps = {
  header: ReactElement;
  content: ReactElement;
  pageName: string;
  footer?: ReactElement;
  className?: string;
}

export function Layout({ header, footer, className, pageName, content }: LayoutProps) {
  const mainSectionModifier = pageName === 'main' ? 'index' : pageName;

  return (
    <div className={clsx('page', className)}>
      {header}

      <main className={clsx('page__main', pageName && `page__main--${mainSectionModifier}`)}>
        {content}
      </main>

      {footer}
    </div >
  );
}
