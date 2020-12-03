import React, {useState} from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import {lightTheme, darkTheme} from "../styles/theme"
import { Helmet } from "react-helmet"

import ThemeSwitcher from "../components/themeSwitcher/themeSwitcher";
import ScrollIcon from "../components/scrollIcon/scrollIncon";

export const StyledView = styled.div`
  height: 100vh;
  width: 100vw;

  .headingWrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  h1 {
    color: ${({ theme }) => theme.body};
    font-size: 42px;
    text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.primaryColor}, 1px -1px 0 ${theme.primaryColor}, -1px 1px 0 ${theme.primaryColor}, 1px 1px 0 ${theme.primaryColor}`};
    text-align: center;
    line-height: 3rem;
  }

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    letter-spacing: 2px;
    //text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.text}, 1px -1px 0 ${theme.text}, -1px 1px 0 ${theme.text}, 1px 1px 0 ${theme.text}`};
  }
`;




const IndexPage = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
          <title>Simone Paccamonti | Bar Manager</title>
          <meta charset="UTF-8" />
          <meta name="description" content={"Simone Paccamonti Bar Manager e Bartender"} />
          <meta name="keywords" content={"Cocktail, Bartender, Bar Manager, Aperitivi"} />
          <meta name="author" content={"Simone Paccamonti"} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      <GlobalStyle />
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
      <ScrollIcon onClick={() => window.scrollTo({top: parseInt(window.pageYOffset/window.innerHeight + 1) * window.innerHeight, behavior: 'smooth'})} />
      <StyledView>
        <div className="headingWrapper">
          <h1>Simone Paccamonti</h1>
          <h2>Bar Manager <br/> &amp; <br/> Bartender</h2>
        </div>
      </StyledView>
      <StyledView />
    </ThemeProvider>
  )
}

export default IndexPage
