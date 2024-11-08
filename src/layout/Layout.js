import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { SEO } from "./SEO"
import { theme } from "../styles"
import { useSplashContext, BannerProvider } from "../context"
import { device } from "../styles"
import { CheckAppBanner } from "./CheckAppBanner/CheckAppBanner"

const StyledMain = styled.main`
  min-height: 100vh;
`

const Main = ({ children }) => {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <BannerProvider>
          <CheckAppBanner />
          <Main>{children}</Main>
        </BannerProvider>
      </ThemeProvider>
    </>
  )
}

export default Layout
