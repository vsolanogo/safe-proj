import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import { useIntl } from "react-intl"
import * as types from "prop-types"

import { navbarLinks } from "../../config"
import { useFormatMessage } from "../../hooks"
import { device, theme } from "../../styles"
import { NavImgs } from "./NavImgs"
import { MenuToggle } from "./MenuToggle"
import { getSelected } from "./helpers"
import { NavLink } from "./NavLink"
import { listItemCss, listCss } from "./styles"

const Ul = styled.ul`
  ${listCss};
`
const Li = styled.li`
  ${listItemCss};
`

const NavMobile = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: all 0.75s ease-in-out;
  transform: translateX(-100vw);

  @media ${device.laptop} {
    display: none;
  }

  &[data-isopen="true"] {
    transform: translateX(0px);
  }

  &[data-whitebg="true"] {
    background-color: #000;
  }

  &[data-blackbg="true"] {
    background-color: #fff;
  }
`

const MenuToggleS = styled(MenuToggle)`
  margin: 20px 0 0 0;
  position: absolute;

  @media ${device.mobileL} {
    margin: 15px 0 0 0;
    transform: translateX(45px);
  }
`

export const SideMenuNav = React.memo(
  ({ color, isOpen, toggleNavbar, logoColor }) => {
    const f = useFormatMessage()
    const { locale } = useIntl()
    const { pathname } = useLocation()

    return (
      <>
        <NavMobile
          data-isopen={isOpen}
          data-whitebg={color === "#fff"}
          data-blackbg={color !== "#fff"}
        >
          <MenuToggleS
            isOpen={isOpen}
            toggleNavbar={() => toggleNavbar(false)}
            color={logoColor}
          />
          <Ul>
            {Object.values(navbarLinks).map(({ path, title, style }) => (
              <Li {...style} key={path}>
                <NavLink
                  onClick={() => toggleNavbar(false)}
                  selected={getSelected(path, locale, pathname)}
                  color={color}
                  path={path}
                >
                  {f(title)}
                </NavLink>
              </Li>
            ))}
          </Ul>
        </NavMobile>
        <NavImgs isOpen={isOpen} />
      </>
    )
  },
  (prev, next) =>
    prev.color === next.color &&
    prev.isOpen === next.isOpen &&
    prev.toggleNavbar === next.toggleNavbar &&
    prev.logoColor === next.logoColor
)

SideMenuNav.defaultProps = {
  color: theme.colors.white,
  logoColor: theme.colors.white,
}

SideMenuNav.propTypes = {
  color: types.string,
  logoColor: types.string,
  isOpen: types.bool.isRequired,
  toggleNavbar: types.func.isRequired,
}
