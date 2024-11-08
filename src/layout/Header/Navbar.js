import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import { useIntl } from "react-intl"
import * as types from "prop-types"

import { navbarLinks } from "../../config"
import { useFormatMessage } from "../../hooks"
import { device, theme } from "../../styles"
import { NavLink } from "./NavLink"
import { getSelected } from "./helpers"
import { listItemCss, listCss } from "./styles"

const Ul = styled.ul`
  ${listCss};
`

const Li = styled.li`
  ${listItemCss};
`

const Nav = styled.nav`
  display: none;
  
  @media ${device.laptop} {
    position: static;
    display: block;
    text-align: left;
    align-items: flex-start;
    background-color: transparent;
    height: auto;
    width: auto;
  }
`

export const Navbar = React.memo(({ color, isBannerShow }) => {
  const f = useFormatMessage()
  const { locale } = useIntl()
  const { pathname } = useLocation()

  return (
    <>
      <Nav color={color} isBannerShow={isBannerShow} >
        <Ul>
          {Object.values(navbarLinks).map(({ path, title, style }) => (
            <Li {...style} key={path}>
              <NavLink
                selected={getSelected(path, locale, pathname)}
                color={color}
                path={path}
              >
                {f(title)}
              </NavLink>
            </Li>
          ))}
        </Ul>
      </Nav>
    </>
  )
}, (prev, next) => (
  prev.color === next.color
  && prev.isBannerShow === next.isBannerShow
))

Navbar.defaultProps = {
  color: theme.colors.white,
}

Navbar.propTypes = {
  color: types.string,
  isBannerShow: types.bool.isRequired,
}
