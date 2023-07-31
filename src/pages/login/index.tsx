import { Header } from '@/widgets/header';
import { LoginForm } from '@/features/authorization/loginForm';
import { Layout } from '@/shared/layouts';

export default function LoginPage() {
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
