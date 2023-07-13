import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  title: string;
  className?: string;
}

export function Layout({ header, content, footer, title, className }: LayoutProps) {
  return (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {header}
      {content}
      {footer}
    </div >
  );
}
