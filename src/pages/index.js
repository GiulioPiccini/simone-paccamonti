import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import {lightTheme} from "../styles/theme"
import { Helmet } from "react-helmet"

import HeaderImage from "../../static/header.jpg"
import MeImage from "../../static/chi-sono.jpg"

export const StyledView = styled.div`
  height: 100%;
  width: 100vw;

  .firstView {
    height: 100vh;
    background-image: url(${HeaderImage});
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .headingWrapper {
    position: absolute;
    left: 50%;
    top: 25%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  h1 {
    text-align: center;
    font-size: 36px;
    color: ${({ theme }) => theme.primaryColor};
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.primaryFont};
    margin: 0.75rem 0 0 0;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.body};
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.secondaryFont};
    margin: 0;
    padding: 0.25rem 0;
    background: ${({ theme }) => theme.secondaryColor};
  }

  .firstParagraph {
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.secondaryColor};
    margin: 2rem 2rem;
  }

  .meImage {
    width: 70%;
    display: block;
    margin: auto;
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

  return (
    <ThemeProvider theme={lightTheme}>
      <Helmet>
          <title>Simone Paccamonti | Bar Manager</title>
          <meta charset="UTF-8" />
          <meta name="description" content={"Simone Paccamonti Bar Manager e Bartender"} />
          <meta name="keywords" content={"Cocktail, Bartender, Bar Manager, Aperitivi"} />
          <meta name="author" content={"Simone Paccamonti"} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      <GlobalStyle />
      <StyledView>
        <h1>Simone Paccamonti</h1>
        <h2>Bar Manager &amp; Bartender</h2>
        <div className="firstView" />
        <p className="firstParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <img src={MeImage} alt="Chi sono" className="meImage"/>
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
