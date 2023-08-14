import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { checkAuthStatus, getAuthStatus } from '@/features/authorization';
import { ScrollToTop, useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppRouter } from './appRouter';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, []);

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
