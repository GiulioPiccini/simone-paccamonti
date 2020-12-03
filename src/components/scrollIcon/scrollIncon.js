import React from "react";
import styled from "styled-components";

export const StyledScrollIcon = styled.div`
    position: absolute;
    left: 50%;
    width: 40px;
    height: 40px;
    bottom: 60px;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px ${({ theme }) => theme.primaryColor} solid;
    border-bottom: 2px ${({ theme }) => theme.primaryColor} solid;
    cursor: pointer;

    :before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        margin: -10px 0 0 10px;
        border-left: none;
        border-top: none;
        border-right: 1px ${({ theme }) => theme.primaryColor} solid;
        border-bottom: 1px ${({ theme }) => theme.primaryColor} solid;
        animation-duration: 1.7s;
        animation-iteration-count: infinite;
        animation-name: arrow;
    }
    @keyframes arrow {
        0% { opacity: 1; }
        100% { opacity: 0; transform: translate( -10px, -10px)   }
       }

`;

const ScrollIcon = ({onClick}) => {
  return (
    <StyledScrollIcon onClick={onClick}>
    </StyledScrollIcon>
  );
};

export default ScrollIcon;