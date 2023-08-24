import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/app-store';

export const withRedux = (Component: Component) => {
  const DecoratedComponent = () => (
    <ReduxProvider store={store}>
      <Component />
    </ReduxProvider>
  );

  DecoratedComponent.displayName = 'DecoratedComponent';
  return DecoratedComponent;
};
