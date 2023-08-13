import { Navigate } from 'react-router-dom';
import { APIStatus } from '../../../api/index';
import { useAppSelector } from '../index';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    authStatus === APIStatus.Fulfilled
      ? children
      : <Navigate to="/login" />
  );
}
