import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from '@/shared/lib';
import { AppRouter } from './appRouter';
import { withProviders } from './providers';
import './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
