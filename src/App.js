import React, { useState, useEffect, useContext } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnmountClosed } from 'react-collapse';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from './lib/themeContext';
import themes from './styles/themes';
import { GlobalStyles, TabStyles } from './styles/themes/global';

import Profile from './views/Profile';
import Blog from './views/Blog';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [collapseIdx, setCollapseIdx] = useState(0);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const tabsContent = [Profile, Blog, Portfolio, Resume]
  const tabsIcon = ['user-tie', 'feather', 'file-code', ['fab', 'readme']]

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-156444181-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    console.log(
      `%cHey there! Interested in the man behind this website? Feel free to contact me. You can send an email directly to: ibrhm.ibam@gmail.com or send message to my LinkedIn: linkedin.com/in/ibrahim29`,
      'color: #e8e8e8; font-weight: bold; font-size: 15px; background-color: black; border: 2px solid red; padding: 15px;'
    );
  }, []);

  const handleChangeTab = (index) => {
    setCollapseIdx(index);

    setTimeout(() => {
      setTabIndex(index);
    }, 500);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <TabStyles />

      <Header />

      <Tabs selectedIndex={tabIndex} onSelect={handleChangeTab}>
        <TabList>
          {
            tabsIcon.map((icon, i) => (
              <Tab key={i}>
                <FontAwesomeIcon icon={icon} size="3x" /> <br />
                {t(`Tab${i + 1}`)}
              </Tab>
            ))
          }
        </TabList>

        {
          tabsContent.map((Content, idx) => (
            <UnmountClosed isOpened={collapseIdx === idx} key={idx}>
              <TabPanel>
                <Content />
              </TabPanel>
            </UnmountClosed>
          ))
        }
      </Tabs>

      <Footer />

    </ThemeProvider>
  );
};

export default App;
