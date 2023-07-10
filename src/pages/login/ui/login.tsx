import { Header } from '@/widgets/header';
import { LoginForm } from '@/features/authorization/loginForm';
import { Layout } from '@/shared/layouts';

export function LoginPage() {
  return (
    <Layout
      header={<Header hasNavigation={false} />}
      content={<LoginForm />}
      pageName='login'
      className='page--gray page--login'
    />
  );
}
