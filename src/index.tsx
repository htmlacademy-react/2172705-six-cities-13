import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/app';
import { previewOffers } from './global/mock/previewOffers';
import { openedOffers } from './global/mock/openedOffers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      previewOffers={previewOffers}
      openedOffers={openedOffers}
    />
  </React.StrictMode>
);
