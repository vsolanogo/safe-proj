import React, { useState, useEffect, useContext, useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

import { Navbar } from "./Navbar"
import { MenuToggle } from "./MenuToggle"
import Logo from "../../assets/svg/logo.inline.svg"
import { sectionCss } from "../../styles"
import { navbarLinks, checkAppBanner, marketsLinks } from "../../config"
import { getRem } from "../../utils"
import { theme, device, size } from "../../styles"
import { useScrollDirection } from "../../components/useScrollDirection"
import { MainContext } from "../../store/main/contexts"
import { useBannerContext } from "../../context"
import { StoreButton } from "../../components/StoreButton/StoreButton"
import { SideMenuNav } from "./SideNav"
import { Helmet } from "react-helmet"
import { ScrollPosition } from "../../components/ScrollPosition"
import { StyledHeader } from "./StyledHeader"
import { Languages } from "./Languages"
import Sticky from "react-sticky-el"

const { HOME } = navbarLinks

const { colors } = theme

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)};

  @media ${device.mobileL} {
    margin: 0 2em;
  }

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto;
  }

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  justify-content: space-between;
  padding: ${getRem(12)} 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${size.laptop}px) {
    display: none;
  }
`

const LogoLinkS = styled(Link)`
  width: min-content;
  padding: 0 ${getRem(20)} ${getRem(5)};
  margin: 0 auto;

  @media ${device.laptop} {
    padding-left: 0;
    padding-right: ${getRem(20)};
  }

  @media (max-width: 1023px) {
    display: none;
  }
`

const LogoLinkSMobile = styled(Link)`
  width: min-content;
  position: fixed;
  top: 1.16rem;
  margin: auto;
  left: 0;
  right: 0;

  @media (min-width: 1023px) {
    display: none;
  }
`

const StyledToggle = styled(MenuToggle)`
  transform: none;
`

export const Component = React.memo(
  ({
    contentColor,
    hideSplash,
    backgroundColor,
    logoColor,
    scrollPosition,
  }) => {
    const [hideOnScrollDown, setHideOnScrollDown] = useState(false)
    const { isBannerShow } = useBannerContext()

    const scrollDir = useScrollDirection()

    const [isOpen, setOpen] = useState(false)

    const toggleNavbar = val => setOpen(val)

    useEffect(() => {
      setHideOnScrollDown(scrollDir === "down")
    }, [scrollDir])

    return (
      <>
        {isOpen && (
          <Helmet>
            <style type="text/css">
              {`  
                  body {
                    overflow: hidden;
                  }
            `}
            </style>
          </Helmet>
        )}

           {/* zIndex: 1890, */}
          <StyledHeader
            background={backgroundColor}
            data-makeshadow={backgroundColor === "#fff" && scrollPosition > 5}
            id="navbaridimpoertant"
            data-hideonscrolldown={
              (isBannerShow && scrollPosition > 80 && hideOnScrollDown) ||
              (!isBannerShow && hideOnScrollDown)
            }
          >
            <StyledContainer>
              <StyledToggle
                isOpen={isOpen}
                toggleNavbar={() => toggleNavbar(true)}
                color={logoColor}
              />
              <LogoLinkS to={HOME.path}>
                <Logo fill={logoColor} />
              </LogoLinkS>

              <LogoLinkSMobile to={HOME.path}>
                <Logo fill={logoColor} />
              </LogoLinkSMobile>

              <Navbar
                isBannerShow={isBannerShow}
                isOpen={isOpen}
                color={contentColor}
              />

              <ButtonWrapper>
                <StoreButton
                  href={marketsLinks.apple}
                  color={contentColor}
                  iconClassName="icon-apple"
                >
                  App Store
                </StoreButton>
                <StoreButton
                  href={marketsLinks.google}
                  color={contentColor}
                  iconClassName="icon-android"
                >
                  Google play
                </StoreButton>
                {/* <Languages color={contentColor} /> */}
              </ButtonWrapper>
            </StyledContainer>
          </StyledHeader>

        <SideMenuNav
          isOpen={isOpen}
          color={contentColor}
          logoColor={logoColor}
          toggleNavbar={toggleNavbar}
        />
      </>
    )
  },
  (prev, next) =>
    prev.hideSplash === next.hideSplash &&
    prev.contentColor === next.contentColor &&
    prev.backgroundColor === next.backgroundColor &&
    prev.logoColor === next.logoColor &&
    prev.scrollPosition === next.scrollPosition
)

export const Header = () => {
  const { state } = useContext(MainContext)

  return (
    <ScrollPosition
      render={({ scrollPosition }) => (
        <Component
          hideSplash={state.splash.hide}
          contentColor={state.header.contentColor}
          backgroundColor={state.header.backgroundColor}
          logoColor={state.header.logoColor}
          scrollPosition={scrollPosition < 100 ? scrollPosition : 100}
        />
      )}
    />
  )
}

Component.defaultProps = {
  color: colors.white,
}
