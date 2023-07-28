import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  title: string;
  wrapperClassName?: string;
}

export function Layout({ header, content, footer, title, wrapperClassName }: LayoutProps) {
  return (
    <div className={wrapperClassName}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {header}
      {content}
      {footer}
    </div >
  );
}
