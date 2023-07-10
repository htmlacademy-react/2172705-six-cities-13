import { getLogoSize } from '../lib';

type LogoLinkProps = {
  type: 'header' | 'footer';
  href?: string;
}

export function LogoLink({ type, href }: LogoLinkProps) {
  const logoSize = getLogoSize(type);

  return (
    <a className={`${type}__logo-link`} href={href}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="Logo."
        width={logoSize.width}
        height={logoSize.height}
      />
    </a>
  );
}
