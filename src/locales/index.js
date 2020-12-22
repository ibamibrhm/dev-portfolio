import i18n from 'i18next';

import translationEn from './lang-en/';
import translationId from './lang-id/';

i18n.init({
  debug: process.env.NODE_ENV === 'development',
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en', // use en if detected lng is not available

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },

  resources: {
    en: {
      translations: translationEn,
    },
    id: {
      translations: translationId,
    },
  },
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
