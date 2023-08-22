import { Navigate } from 'react-router-dom';
import { Header } from '@/widgets/header';
import {
  LoginForm,
  getCurrentUserStatusObj,
  getLoginStatusObj
} from '@/features/authorization';
import { Layout } from '@/shared/layouts';
import { useAppSelector } from '@/shared/lib';
import { AppRoute } from '@/const';

export default function LoginPage() {
  const loginStatus = useAppSelector(getLoginStatusObj);
  const currentUserStatus = useAppSelector(getCurrentUserStatusObj);

  if (loginStatus.isFulfilled || currentUserStatus.isFulfilled) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <Layout
      header={<Header hasUserMenu={false} />}
      content={
        <main className="page__main page__main--login">
          <LoginForm />
        </main>
      }
      footer={false}
      title="6 cities: login"
      wrapperClassName="page--gray page--login"
    />
  );
}
