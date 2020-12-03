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
    top: 45%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  h1 {
    text-align: center;
    font-size: 46px;
    color: ${({ theme }) => theme.body};
    text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.primaryColor}, 1px -1px 0 ${theme.primaryColor}, -1px 1px 0 ${theme.primaryColor}, 1px 1px 0 ${theme.primaryColor}`};
    line-height: 3rem;
  }

  h2 {
    text-align: center;
    font-size: 28px;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    letter-spacing: 2px;
  }

  .headingBiographyWrapper {
    margin: 3rem 0 0 2rem;
    h3 {
      text-align: left;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.secondaryColor}, 1px -1px 0 ${theme.secondaryColor}, -1px 1px 0 ${theme.secondaryColor}, 1px 1px 0 ${theme.secondaryColor}`};
    }
  }

  .headingPortfolioWrapper {
    margin: 3rem 2rem 0 0;
    h3 {
      text-align: right;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.primaryColor}, 1px -1px 0 ${theme.primaryColor}, -1px 1px 0 ${theme.primaryColor}, 1px 1px 0 ${theme.primaryColor}`};
    }
  }

  .headingContactWrapper {
    margin: 3rem 0 0 2rem;
    h3 {
      text-align: left;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.secondaryColor}, 1px -1px 0 ${theme.secondaryColor}, -1px 1px 0 ${theme.secondaryColor}, 1px 1px 0 ${theme.secondaryColor}`};
    }
  }

  .headingGalleryWrapper {
    margin: 3rem 2rem 0 0;
    h3 {
      text-align: right;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.primaryColor}, 1px -1px 0 ${theme.primaryColor}, -1px 1px 0 ${theme.primaryColor}, 1px 1px 0 ${theme.primaryColor}`};
    }
  }

`;




const IndexPage = () => {
  const [theme, setTheme] = useState('dark');

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
      <StyledView>
        <div className="headingBiographyWrapper">
          <h3>Biografia</h3>
        </div>
      </StyledView>
      <StyledView>
        <div className="headingPortfolioWrapper">
          <h3>Portfolio</h3>
        </div>
      </StyledView>
      <StyledView>
        <div className="headingContactWrapper">
          <h3>Contattami</h3>
        </div>
      </StyledView>
      <StyledView>
        <div className="headingGalleryWrapper">
          <h3>Gallery</h3>
        </div>
      </StyledView>
    </ThemeProvider>
  )
}

export default IndexPage
