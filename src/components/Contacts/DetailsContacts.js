import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import lottie from "lottie-web"

import ActiveCall from "../../assets/svg/active-call.inline.svg"
import Mail from "../../assets/svg/mail.inline.svg"
import Marker from "../../assets/svg/marker.inline.svg"
import { Title } from "../atoms"
import { useFormatMessage } from "../../hooks"
import { device, size } from "../../styles"
import { getRem } from "../../utils"
import contactsAnimation from "../../assets/animations/contacts"
import { default as mixins } from "../../styles/mixins"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content min-content min-content;
  grid-row-gap: 18px;
  padding-bottom: 26px;
  padding-top: 49px;

  @media ${device.tablet} {
    align-items: flex-start;
    padding: 0;
    grid-row-gap: 25px;
  }

  @media ${device.laptop} {
    padding-left: ${getRem(48)};
    height: 100%;
    border-left: 1px solid var(--borderlight-color);
  }
`

const LinkS = styled.a`
  ${mixins.displayFlex(null, "flex-start", "center")};

  svg {
    margin-right: 14px;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`

const TitleS = styled(Title)`
  margin-bottom: 5px;

  @media ${device.tablet} {
    line-height: 30px;
    margin-top: 17px;
    font-size: 30px;
    margin-bottom: 7px;
  }
`

const LottieAnimationContainer = styled.div`
  width: 258px;
  height: 226px;
  margin: 0 auto;
`

export const DetailsContacts = () => {
  const f = useFormatMessage()
  const animationContainerRef = useRef()

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainerRef.current,
      loop: true,
      renderer: "canvas",
      autoplay: true,
      animationData: contactsAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    })

    return () => {
      animation.destroy()
    }
  }, [])

  return (
    <Wrapper>
      <TitleS align="center">{f("contacts.form.ourContacts")}</TitleS>

      <LottieAnimationContainer ref={animationContainerRef} />

      <LinkS href="mailto:info@google.com">
        <Mail /> info@google.com
      </LinkS>
      <LinkS href="tel:0 ">
        <ActiveCall /> 0
      </LinkS>
      <LinkS href="https://google.com">
        <Marker /> google.com
      </LinkS>
    </Wrapper>
  )
}
