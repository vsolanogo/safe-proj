import React, { useMemo } from "react"
import styled from "styled-components"

import { sectionCss, theme, size } from "../styles"
import { TextP } from "../components"
import { getRem } from "../utils"
import Instagram from "../assets/svg/instagram.inline.svg"
import Facebook from "../assets/svg/facebook.inline.svg"
import Twitter from "../assets/svg/twitter.inline.svg"
import { socialLinks } from "../config"

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid var(--borderlight-color);
`
const StyledContainer = styled.div`
  ${sectionCss};
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: ${size.tablet}px) {
    justify-content: center;
  }
`

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: ${getRem(24)} ${getRem(24)} ${getRem(24)};
  grid-template-rows: ${getRem(24)};
  grid-column-gap: ${getRem(14)};
  align-items: center;
`

const LinkS = styled.a`
  text-align: center;

  svg {
    transition: 0.3s all ease-in-out;
  }

  &:hover {
    svg {
      fill: var(--blue-color);
    }
  }
`

const SocialLink = ({ children, href }) => (
  <LinkS href={href} target="_blank">
    {children}
  </LinkS>
)

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <StyledFooter height={48} as="footer">
      <StyledContainer>
        <TextP color={theme.colors.grayFont}>
          &#169; {year} SoSafe International AB
        </TextP>
        {/*<SocialLinks>*/}
        {/*  <SocialLink href={socialLinks.twitter}>*/}
        {/*    <Twitter />*/}
        {/*  </SocialLink>*/}
        {/*  <SocialLink href={socialLinks.facebook}>*/}
        {/*    <Facebook />*/}
        {/*  </SocialLink>*/}
        {/*  <SocialLink href={socialLinks.instagram}>*/}
        {/*    <Instagram />*/}
        {/*  </SocialLink>*/}
        {/*</SocialLinks>*/}
      </StyledContainer>
    </StyledFooter>
  )
}
