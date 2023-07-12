import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
  children: ReactNode;
}

export function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return (
    authorizationStatus === 'AUTH'
      ? children
      : <Navigate to="/login" />
  );
}
