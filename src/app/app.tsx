import { useEffect } from 'react';
import { getCurrentUser, getCurrentUserStatusObj } from '@/entities/user';
import {
  ScrollToTop,
  Notification,
  useAppDispatch,
  useAppSelector
} from '@/shared/lib';
import { ClockLoader } from '@/shared/ui';
import { AppRouter } from './app-router';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const currentUserStatus = useAppSelector(getCurrentUserStatusObj);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (currentUserStatus.isUncompleted) {
    return <ClockLoader text="Checking your authorization status..." fullPage />;
  }

  return (
    <>
      <Notification />
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
