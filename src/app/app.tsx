import { AppRouter } from './appRouter';
import { withProviders } from './providers';
import './styles.module.css';

function App() {
  return (
    <AppRouter />
  );
}

const appWithProviders = withProviders(App);

export default appWithProviders;
