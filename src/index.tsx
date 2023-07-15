import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/app';
import { MOCK_OFFERS_COUNT } from './global/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={MOCK_OFFERS_COUNT} />
  </React.StrictMode>
);
