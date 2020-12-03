import React from "react";
import styled from "styled-components";

export const StyledScrollIcon = styled.div`
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    outline: none;

    .pos {
        position: relative;
        margin: 0 auto;
    }

    .down-arrow {
        height: 35px;
        width: 35px;
        border: 0 solid ${({ theme }) => theme.primaryColor};
        border-radius: 100%;
    }

    .down-arrow:before,.down-arrow:after {
        content: '';
        position: absolute;
        top: 17px;
        width: 11px;
        border: 1px solid ${({ theme }) => theme.primaryColor};
        transition:all 0.3s;
        -webkit-transition:all 0.3s;
    }

    .down-arrow:before {
        transform: rotateZ(45deg);
        -webkit-transform: rotateZ(45deg);
        left: 7px;
    }

    .down-arrow:after {
        transform: rotateZ(-45deg);
        -webkit-transform: rotateZ(-45deg);
        left: 15px;
    }

    .down-arrow:hover {
        cursor:pointer;
        border-width: 0px;
    }

    .down-arrow:hover:before,.down-arrow:hover:after {
        top:22px;
    }
`;

const ScrollIcon = ({onClick}) => {
  return (
    <StyledScrollIcon onClick={onClick}>
      <div class="pos down-arrow"></div>
    </StyledScrollIcon>
  );
};

export default ScrollIcon;