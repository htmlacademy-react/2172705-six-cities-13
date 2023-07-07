import { LogoLink } from '../../../shared/ui';

export function Footer() {
  return (
    <footer className="footer container">
      <LogoLink
        linkClss='footer__logo-link'
        href='main.html'
        imgClss='footer__logo'
        src='img/logo.svg'
        alt='6 cities logo'
        width={64}
        height={33}
      />
    </footer>
  );
}
