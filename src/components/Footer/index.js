import React from 'react';
import { useTranslation } from 'react-i18next';

import SwitchThemeButton from '../SwitchThemeButton';
import IndonesiaFlag from '../Flags/IndonesiaFlag';
import USAFlag from '../Flags/USAFlag';

const Footer = () => {
  const { i18n } = useTranslation();

  const switchLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <footer className="d-flex justify-content-between mt-3">
      <SwitchThemeButton />
      <section>
        <IndonesiaFlag switchLang={switchLang} lang={i18n.language} />
        <USAFlag switchLang={switchLang} lang={i18n.language} />
      </section>
    </footer>
  );
};

export default React.memo(Footer);
