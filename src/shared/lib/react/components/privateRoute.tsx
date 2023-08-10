import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../const';
import { useAppSelector } from '../index';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
}
