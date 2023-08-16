import { useEffect } from 'react';
import { getCurrentUser, getCurrentUserStatus } from '@/features/authorization';
import {
  ScrollToTop,
  Notification,
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
  const currentUserStatus = useAppSelector(getCurrentUserStatus);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (currentUserStatus.isUncompleted) {
    return <ClockLoader text="Checking your authorization status..." fullPage/>;
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
