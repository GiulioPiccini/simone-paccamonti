import React, {useState} from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import {lightTheme, darkTheme} from "../styles/theme"
import { Helmet } from "react-helmet"

import ThemeSwitcher from "../components/themeSwitcher/themeSwitcher";


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
      <h1>Simone Paccamonti</h1>
    </ThemeProvider>
  )
}

export default IndexPage
