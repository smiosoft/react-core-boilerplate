import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from '~components/layout/Page';
import { getThemeName } from '~redux/theme/theme-selectors';
import { setDarkTheme, setLightTheme } from '~redux/theme/theme-actions';
import Styles from './Home.styles';

function Home() {
  const dispatch = useDispatch();
  const themeName = useSelector(getThemeName);
  const isCurrentlyDarkTheme = themeName === 'dark';

  return (
    <Page title="Home">
      <Styles.Wrapper>
        <h1>React Core Boilerplate</h1>
        <i>Pre-configured solution for building a single-page-application with ASP.NET Core and React.</i>
        <Styles.Emoji onClick={() => dispatch(isCurrentlyDarkTheme ? setLightTheme() : setDarkTheme())}>
          <span role="img" aria-label="rocket">🚀</span>
        </Styles.Emoji>
      </Styles.Wrapper>
    </Page>
  );
}

export default Home;
