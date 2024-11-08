import React from "react"
import styled from "styled-components"
import { device } from "../../styles"

export const StyledHeader = styled.header`
  left: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ background }) => background};
  z-index: 1900;
  transition: transform 0.6s ease-out, box-shadow 0.6s ease;
  box-shadow: 0px 4px 53px rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;

  @media ${device.laptop} {
    height: 72px;
  }

  transform: translate3d(0, 0px, 0);

  &[data-makeshadow="true"] {
    box-shadow: 0px 4px 53px rgba(0, 0, 0, 0.1);
  }

  &[data-hideonscrolldown="true"] {
    transform: translate3d(0, -80px, 0);
  }
`
