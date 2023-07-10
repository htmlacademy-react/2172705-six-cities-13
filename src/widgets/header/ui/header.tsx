import { Navigation } from '@/features/navigation';
import { LogoLink } from '@/shared/ui';

type HeaderProps = {
  hasNavigation?: boolean;
}

export function Header({ hasNavigation = true }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink type="header" />
          </div>

          {hasNavigation && <Navigation />}
        </div>
      </div>
    </header>
  );
}
