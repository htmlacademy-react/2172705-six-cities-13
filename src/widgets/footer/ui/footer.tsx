import { LogoLink } from '@/shared/ui';
import { AppRoute } from '@/global/const';

export function Footer() {
  return (
    <footer className="footer container">
      <LogoLink type="footer" to={AppRoute.Root} />
    </footer>
  );
}
