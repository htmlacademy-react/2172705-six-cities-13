import { Link } from 'react-router-dom';
import { getLogoSize } from '../lib';

type LogoLinkProps = {
  type: 'header' | 'footer';
  to: string;
}

export function LogoLink({ type, to }: LogoLinkProps) {
  const logoSize = getLogoSize(type);

  return (
    <Link className={`${type}__logo-link`} to={to}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="Logo."
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
}
