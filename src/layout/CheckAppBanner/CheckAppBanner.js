import React, { useState, useMemo, useEffect } from "react"
import styled from "styled-components"

import { getRem, getUserAgent } from "../../utils"
import { marketsLinks, checkAppBanner } from "../../config"
import { useBannerContext } from "../../context"
import img from "../../assets/images/banner-img.png"
import Close from "../../assets/svg/close.inline.svg"
import { theme } from "../../styles"
import { Stars } from "./Stars"
import { useFormatMessage } from "../../hooks"
import { isAndroid } from "react-device-detect"
import { Helmet } from "react-helmet"

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  background-color: var(--checkappbg-color);
  height: 80px;
  z-index: 9999;
  padding: 9px 4px;
  top: 0;
  display: none;
  grid-template-columns: 18px 62px 1fr auto;

  &[data-showbanner="true"] {
    display: grid;
  }
`

const Content = styled.div`
  padding: 0 7px;
`

const Button = styled.button`
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const TextS = styled.p`
  font-size: ${({ size }) => (size ? getRem(size) : getRem(13))};
  line-height: ${({ lineHeight }) =>
    lineHeight ? getRem(lineHeight) : getRem(15)};
  font-family: Roboto, sans-serif;
  font-weight: ${({ weight }) => weight || 200};
  margin-top: 0;
  margin-bottom: 0;
  color: ${({ color, theme }) => (color ? color : theme.colors.gray)};
`

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: var(--blue-color);
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${getRem(14)};
  line-height: ${getRem(16)};
`

export const CheckAppBanner = () => {
  const { isBannerShow, checkAppOnStore, toggleCheckAppOnStore } =
    useBannerContext()

  const f = useFormatMessage()

  const [isAndroidPhone, setAndroidPhone] = useState(false)

  const textFromStore = useMemo(
    () =>
      isAndroidPhone
        ? "appBanner.getOnPlayMarket.text"
        : "appBanner.getOnAppStore.text",

    [isAndroidPhone]
  )

  useEffect(() => {
    setAndroidPhone(isAndroid)
  }, [])

  return (
    <Wrapper data-showbanner={!!isBannerShow}>
      {isBannerShow && (
        <Helmet>
          <style type="text/css">
            {`  
                 #___gatsby {
                  padding-top: 80px !important;
                }
            `}
          </style>
        </Helmet>
      )}

      <Button onClick={toggleCheckAppOnStore}>
        <Close />
      </Button>
      <img src={img} alt="Logo" />
      <Content>
        <TextS as="h3" weight={500} color={theme.colors.black}>
          {f("companyName")}
        </TextS>
        <TextS size={11} lineHeight={13} weight={400}>
          {f("footerText")}
        </TextS>
        <Stars />
        <TextS size={12} lineHeight={14} weight={400}>
          {f(textFromStore)}
        </TextS>
      </Content>
      <Link
        href={isAndroidPhone ? marketsLinks.google : marketsLinks.apple}
        rel="noreferrer noopener"
        onClick={checkAppOnStore}
      >
        {f("appBanner.check.text")}
      </Link>
    </Wrapper>
  )
}
