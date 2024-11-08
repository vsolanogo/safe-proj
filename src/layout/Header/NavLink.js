import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"
import * as types from "prop-types"

import { getRem } from "../../utils"
import { device, theme } from "../../styles"

const StyledLink = styled(Link)`
  margin: ${getRem(6)} 0;
  position: relative;
  color: ${({ color }) => color};
  z-index: 99;
  display: inline-block;

  padding: ${getRem(17)} ${getRem(20)};
  font-size: ${getRem(25)};
  line-height: ${getRem(20.72)};
  font-family: Roboto, sans-serif;
  font-weight: 400;

  @media ${device.mobileL} {
    font-size: ${getRem(37.0526)};
  }

  @media ${device.laptop} {
    padding: ${getRem(8)} ${getRem(10)};
    font-size: ${getRem(14)};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 5px;
    border-radius: ${getRem(16)};
    background-color: var(--cyan-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease-in-out;
    width: calc(100% - ${getRem(38)});
    height: ${getRem(4)};
    left: ${getRem(19)};

    @media ${device.laptop} {
      left: 9px;
      width: 100%;
      height: ${getRem(2)};
      width: calc(100% - ${getRem(18)});
    }
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }

  &[data-selected="true"] {
    font-weight: 700;
    &::before {
      transform: scaleX(1);
    }
  }
`

export const NavLink = ({ path, onClick, selected, color, children }) => (
  <StyledLink
    onClick={onClick}
    data-selected={selected}
    color={color}
    to={path}
  >
    {children}
  </StyledLink>
)

NavLink.defaultProps = {
  color: theme.colors.white,
}

NavLink.propTypes = {
  path: types.string.isRequired,
  onClick: types.func,
  selected: types.bool.isRequired,
  color: types.string,
}
