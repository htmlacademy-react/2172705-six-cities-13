import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../const';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

export function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
}
