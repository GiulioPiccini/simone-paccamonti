import React, {useState} from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import {lightTheme, darkTheme} from "../styles/theme"
import { Helmet } from "react-helmet"
import Zoom from "react-reveal/Zoom";


import HeaderImage from "../../static/header.jpg"
import ThemeSwitcher from "../components/themeSwitcher/themeSwitcher";


export const StyledView = styled.div`
  height: 100%;
  width: 100vw;

  .firstView {
    height: 100vh;
    background-image: url(${HeaderImage});
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(${({ theme }) => theme.grayScale});
  }

  .headingWrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  h1 {
    text-align: center;
    font-size: 46px;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${({ theme }) => theme.primaryColor};
    line-height: 3rem;
    letter-spacing: 5px;
    margin-bottom: 3rem
  }

  h2 {
    text-align: center;
    font-size: 28px;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    letter-spacing: 2px;
  }

  .headingBiographyWrapper {
    margin: 3rem 2rem 0 2rem;
    h3 {
      text-align: left;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.secondaryColor}, 1px -1px 0 ${theme.secondaryColor}, -1px 1px 0 ${theme.secondaryColor}, 1px 1px 0 ${theme.secondaryColor}`};
    }
  }

  .headingPortfolioWrapper {
    margin: 3rem 2rem 0 2rem;
    h3 {
      text-align: right;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.primaryColor}, 1px -1px 0 ${theme.primaryColor}, -1px 1px 0 ${theme.primaryColor}, 1px 1px 0 ${theme.primaryColor}`};
    }
    p {
      text-align: right;
    }
  }

  .headingContactWrapper {
    margin: 3rem 2rem 0 2rem;
    h3 {
      text-align: left;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.secondaryColor}, 1px -1px 0 ${theme.secondaryColor}, -1px 1px 0 ${theme.secondaryColor}, 1px 1px 0 ${theme.secondaryColor}`};
    }
  }

  .headingGalleryWrapper {
    margin: 3rem 2rem 0 2rem;
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
      <StyledView>
        <div className="firstView" />
          <div className="headingWrapper">
          <Zoom delay={300}>
            <h1>Simone 
              Paccamonti</h1>
          </Zoom>
          <Zoom delay={1000}>
            <h2>Bar Manager <br/> &amp; <br/> Bartender</h2>
          </Zoom>
          </div>
        <div className="headingBiographyWrapper">
          <h3>Biografia</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="headingPortfolioWrapper">
          <h3>Portfolio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="headingContactWrapper">
          <h3>Contattami</h3>
        </div>
        <div className="headingGalleryWrapper">
          <h3>Gallery</h3>
        </div>
      </StyledView>
    </ThemeProvider>
  )
}

export default IndexPage
