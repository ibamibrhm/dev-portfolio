import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faReadme,
  faDev,
  faMedium,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUserTie,
  faFeather,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';

import i18n from './locales';
import ThemeContextProvider from './lib/themeContext';
import App from './App';

library.add(
  faReadme,
  faDev,
  faMedium,
  faGithubSquare,
  faLinkedin,
  faUserTie,
  faFeather,
  faFileCode
);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
