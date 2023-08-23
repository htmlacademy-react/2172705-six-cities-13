import { Navigate } from 'react-router-dom';
import { APIStatus } from '../../../api/index';
import { useAppSelector } from '../index';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const currentUserStatus = useAppSelector((state) => state.user.currentUserStatus);
  const loginAuthStatus = useAppSelector((state) => state.user.loginAuthStatus);

  return (
    (currentUserStatus === APIStatus.Fulfilled || loginAuthStatus === APIStatus.Fulfilled)
      ? children
      : <Navigate to="/login" />
  );
}
