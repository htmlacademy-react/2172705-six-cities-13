import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './globalStyles';
import { App } from './app/app';

const MOCK_OFFERS_COUNT = 1337;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App offersCount={MOCK_OFFERS_COUNT} />
  </React.StrictMode>
);
