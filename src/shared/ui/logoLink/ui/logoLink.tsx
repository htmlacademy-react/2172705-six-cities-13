import { Link } from 'react-router-dom';

import { getLogoSize } from '../lib';

type LogoLinkProps = {
  type: 'header' | 'footer';
}

export function LogoLink({ type }: LogoLinkProps) {
  const logoSize = getLogoSize(type);

  return (
    <Link className={`${type}__logo-link`} to="/">
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
