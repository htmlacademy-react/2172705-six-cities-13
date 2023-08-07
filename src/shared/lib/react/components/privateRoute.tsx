import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../const';
import { useAppSelector } from '../index';

type PrivateRouteProps = PropsWithChildren;

export function PrivateRoute({ children }: PrivateRouteProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
}
