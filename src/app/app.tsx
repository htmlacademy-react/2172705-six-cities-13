import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { me, getMeAuthStatus } from '@/features/authorization';
import {
  ScrollToTop,
  useAppDispatch,
  useAppSelector
} from '@/shared/lib';
import { ClockLoader } from '@/shared/ui';
import { AppRouter } from './appRouter';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const meAuthStatus = useAppSelector(getMeAuthStatus);

  useEffect(() => {
    dispatch(me());
  }, []);

  if (meAuthStatus.isNotCalculated) {
    return <ClockLoader text="Checking your authorization status..." fullPage/>;
  }

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
