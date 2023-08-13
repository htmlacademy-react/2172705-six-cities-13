import { Link, useLocation } from 'react-router-dom';
import { logout } from '@/features/authorization';
import { APIStatus } from '@/shared/api';
import { resetState, useAppSelector, useAppDispatch } from '@/shared/lib';
import { LogoLink } from '@/shared/ui';
import { AppRoute } from '@/const';

type HeaderProps = {
  hasUserMenu?: boolean;
}

export function Header({ hasUserMenu = true }: HeaderProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  const handleSignOut = () => {
    dispatch(logout());
  };

  const handleSignIn = () => dispatch(resetState());

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

          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === APIStatus.Fulfilled
                ? (
                  <>
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
                        to={location.pathname}
                        onClick={handleSignOut}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>)
                : (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Login}
                      onClick={handleSignIn}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
