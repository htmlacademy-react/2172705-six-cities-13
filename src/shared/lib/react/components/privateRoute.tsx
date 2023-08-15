import { Navigate } from 'react-router-dom';
import { APIStatus } from '../../../api/index';
import { useAppSelector } from '../index';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const meAuthStatus = useAppSelector((state) => state.auth.meAuthStatus);
  const loginAuthStatus = useAppSelector((state) => state.auth.loginAuthStatus);

  return (
    (meAuthStatus === APIStatus.Fulfilled || loginAuthStatus === APIStatus.Fulfilled)
      ? children
      : <Navigate to="/login" />
  );
}
