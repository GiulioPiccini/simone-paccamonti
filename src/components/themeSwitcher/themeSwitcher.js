import React from "react";
import styled from "styled-components";
import Sun from "../../../static/sun.png"
import Moon from "../../../static/moon.png"

export const StyledThemeSwitcher = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  background-image: ${props => props.theme === 'light' ? `url(${Moon})` : `url(${Sun})`};
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.2s ease-in-out;
  }
`;

const themeSwitcher = ({theme, setTheme}) => {
  const onClickThemeSwitcher = () => {
    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
    return (
        <StyledThemeSwitcher theme={theme} onClick={onClickThemeSwitcher}/>
    )
}


export default themeSwitcher;