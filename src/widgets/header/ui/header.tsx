import { Link } from 'react-router-dom';
import { dropToken } from '@/shared/api';
import { AuthStatus, resetState, useAppSelector } from '@/shared/lib';
import { useAppDispatch } from '@/shared/lib';
import { LogoLink } from '@/shared/ui';
import { AppRoute } from '@/const';

type HeaderProps = {
  hasUserMenu?: boolean;
}

export function Header({ hasUserMenu = true }: HeaderProps) {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  const handleSignOut = () => {
    dropToken();
    dispatch(resetState());
  };

  if (!hasUserMenu) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink type="header" to={AppRoute.Root} />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink type="header" to={AppRoute.Root} />
          </div>

          {authStatus === AuthStatus.Auth
            ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{userData.email}</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Login}
                      onClick={handleSignOut}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>)
            : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>)}
        </div>
      </div>
    </header>
  );
}
