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

  .headingBiografyWrapper {
    margin: 6rem 0 0 2rem;
    h3 {
      text-align: left;
      font-size: 46px;
      color: ${({ theme }) => theme.body};
      text-shadow: ${({ theme }) => `-1px -1px 0 ${theme.secondaryColor}, 1px -1px 0 ${theme.secondaryColor}, -1px 1px 0 ${theme.secondaryColor}, 1px 1px 0 ${theme.secondaryColor}`};
    }
    .btn{
      cursor:pointer;
      position:relative;
      padding:10px 20px;
      background:white;
      font-size:28px;
      border-top-right-radius:10px;
      border-bottom-left-radius:10px;
      transition:all 1s;
      color: ${({ theme }) => theme.primaryColor};
      &:after,&:before{
        content:" ";
        width:10px;
        height:10px;
        position:absolute;
        border :0px solid ${({ theme }) => theme.body};
        transition:all 1s;
        }
      &:after{
        top:-1px;
        left:-1px;
        border-top: 3px solid ${({ theme }) => theme.primaryColor};
        border-left: 3px solid ${({ theme }) => theme.primaryColor};
      }
      &:before{
        bottom: -1px;
        right: -1px;
        border-bottom: 3px solid ${({ theme }) => theme.primaryColor};
        border-right: 3px solid ${({ theme }) => theme.primaryColor};
      }
      &:hover{
        border-top-right-radius:0px;
      border-bottom-left-radius:0px;
          //background:rgba(0,0,0,.5);
          color: ${({ theme }) => theme.primaryColor};
        &:before,&:after{
          width:100%;
          height:100%;
          border-color: ${({ theme }) => theme.primaryColor};
        }
      }
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
        <div className="headingBiografyWrapper">
          <h3>Biografia</h3>
          <span class="btn">Hover Me </span>
        </div>
      </StyledView>
    </ThemeProvider>
  )
}

export default IndexPage
