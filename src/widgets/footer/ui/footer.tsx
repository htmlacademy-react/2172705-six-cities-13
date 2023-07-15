import { AppRoute } from '@/global/const';

import { LogoLink } from '@/shared/ui';

export function Footer() {
  return (
    <footer className="footer container">
      <LogoLink type="footer" to={AppRoute.Root} />
    </footer>
  );
}
