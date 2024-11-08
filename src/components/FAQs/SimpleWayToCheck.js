import React, { useState } from "react"
import styled, { css } from "styled-components"
import { TextRoboto } from "../shared"
import { pressOnlyNumbersAndPlus } from "../../utils/PressOnlyNumbers"
import { useBoolean } from "usehooks-ts"
import { StaticImage } from "gatsby-plugin-image"
import i5svg from "../../assets/svg/line-pattern.svg"
import i1svg from "../../assets/svg/linedCircle.svg"
import img1 from "../../assets/svg/circleCheckmark.svg"
import axios from "axios"
import { useFormatMessage } from "../../hooks"

const pattern = /^\+?\d{9,13}/

export const SimpleWayToCheck = () => {
  const [numberIsValid, setNumberIsValid] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [agreedPolicy, setAgreedPolicy] = useState(false)
  const searchFocus = useBoolean(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const f = useFormatMessage()

  const handleChange = e => {
    const value = e.target.value
    setInputValue(value)
    setNumberIsValid(pattern.test(value))
  }

  const handleSubmitClick = () => {
    if (!agreedPolicy) {
      alert(f("emergencyInfo.pleaseagreetopolicy"))
      return
    }

    if (!numberIsValid) {
      alert(f("emergencyInfo.invalidnumber"))
      return
    }

    setIsLoading(true)

    axios
      .get(`https://app.sosafe.io/app/fake-emergency/send-sms/${inputValue}`)
      .then(res => {
        console.log(res)
        setSuccessMessage(true)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setInputValue("")
        setSuccessMessage(false)
        setIsLoading(false)
        alert("Error")
      })
  }

  return (
    <div
      css={`
        padding: 0 2em;
      `}
    >
      <SWrapper>
        <div>
          <SHeader>
            <span
              css={`
                all: inherit;
                font-weight: 300;
                margin: 0;
              `}
            >
              Simple way
            </span>{" "}
            <span
              css={`
                all: inherit;
                margin: 0;
              `}
            >
              to check how it works
            </span>
          </SHeader>
          <TextRoboto
            css={`
              padding: 0;
              margin: 1.5em 0 1em 0;
              font-weight: 300;
              line-height: 1.8;
              text-align: initial;
              max-width: 32em;
            `}
          >
            Vi tror på kraften i teknologin. Klick och i realtid delas ljud och
            position med dig som anhörig och larmcentral. SoSafe är trygghet -
            tillsamans
          </TextRoboto>
          <SmsSkika data-successmessage={successMessage}>
            <div
              css={`
                background: #edfdfa;
                border-radius: 10px;
                display: flex;
                padding: 0.5em 0;
                width: 100%;
                align-items: center;
                justify-content: center;
              `}
            >
              <img
                src={img1}
                css={`
                  width: 26px;
                  height: 26px;
                  margin-right: 1em;
                `}
              />
              <p
                css={`
                  font-family: Roboto;
                  font-size: 16px;
                  color: #181930;
                `}
              >
                SMS skickat
              </p>
            </div>
          </SmsSkika>
          <EInputSendlinkWrapper data-successmessage={successMessage}>
            <Wrapper data-active={searchFocus.value}>
              <ESearchInput
                placeholder="Your phone number"
                onFocus={searchFocus.setTrue}
                onBlur={searchFocus.setFalse}
                value={inputValue}
                onChange={handleChange}
                onKeyPress={pressOnlyNumbersAndPlus}
                type="tel"
              />
            </Wrapper>

            <div
              css={`
                position: relative;
              `}
            >
              <ESearch onClick={handleSubmitClick}>Send testlink</ESearch>
            </div>
          </EInputSendlinkWrapper>
          <EInputSendlinkWrapper2 data-successmessage={successMessage}>
            <SCheckmarkWrapper
              data-selected={agreedPolicy}
              onClick={() => {
                setAgreedPolicy(!agreedPolicy)
              }}
            ></SCheckmarkWrapper>
            <div
              css={css`
                display: flex;
                align-items: center;
                @media (max-width: 640px) {
                  flex-direction: column;
                }
              `}
            >
              <div>
                <TextRoboto
                  css={`
                    padding: 0 0.1em;
                    font-weight: 400;
                    font-size: 1.03em;
                    margin: 0;
                    display: inline-block;
                    white-space: nowrap;
                  `}
                >
                  I agree with
                </TextRoboto>

                <TextRoboto
                  css={`
                    padding: 0 0.1em;
                    font-weight: 400;
                    font-size: 1.03em;
                    margin: 0;
                    text-decoration: underline;
                    display: inline-block;
                    white-space: nowrap;
                  `}
                  as="a"
                  href="/terms-conditions"
                >
                  Terms&Conditions
                </TextRoboto>
              </div>
              <div>
                <TextRoboto
                  css={`
                    padding: 0 0.1em;
                    font-weight: 400;
                    font-size: 1.03em;
                    margin: 0;
                    display: inline-block;
                    white-space: nowrap;
                  `}
                >
                  and
                </TextRoboto>

                <TextRoboto
                  css={`
                    padding: 0 0.1em;
                    font-weight: 400;
                    font-size: 1.03em;
                    margin: 0;
                    text-decoration: underline;
                    display: inline-block;
                  `}
                  as="a"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </TextRoboto>
              </div>
            </div>
          </EInputSendlinkWrapper2>
        </div>
        <div
          css={`
            display: flex;
            position: relative;
            @media (max-width: 1000px) {
              min-height: 20em;
              margin-bottom: 2em;
            }
          `}
        >
          <div
            css={`
              @media (max-width: 1000px) {
                display: none;
              }
              > div {
                position: absolute !important;
                bottom: -3em;
                left: 27%;
                z-index: 20;
              }
            `}
          >
            <StaticImage
              src="../../assets/images/phoneCropped.png"
              placeholder="none"
              layout="constrained"
              width={350}
              objectFit="contain"
              formats={["png"]}
              quality={70}
            />
          </div>

          <div
            css={`
              @media (min-width: 1001px) {
                display: none;
              }
              > div {
                z-index: 20;
                bottom: 0;
                position: absolute !important;
                left: 0;
                right: 0;
              }
            `}
          >
            <StaticImage
              src="../../assets/images/phone.png"
              placeholder="none"
              layout="constrained"
              width={200}
              objectFit="contain"
              formats={["png"]}
              quality={70}
            />
          </div>

          <img
            src={i5svg}
            css={`
              @media (max-width: 1000px) {
                display: none;
              }
              position: absolute;
              bottom: -3em;
              z-index: 10;
              width: 100%;
              right: -4em;
            `}
          />

          <img
            src={i1svg}
            css={`
              @media (min-width: 1001px) {
                display: none;
              }
              position: absolute;
              z-index: 10;
              max-height: 25em;
              top: -4em;
              margin: auto auto 3em auto;
              left: 0;
              right: 0;
              transform: translateX(1em);
            `}
          />
        </div>
      </SWrapper>
    </div>
  )
}

const SWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  max-width: 81em;
  padding: 3em 4em;
  background: var(--cyan-color);
  border-radius: 20px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 2em;
  }
`

const Wrapper = styled.div`
  max-width: 106em;
  width: 100%;
  padding: 0;
  margin-bottom: 3em;
  transition: all 0.2s;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08);

  margin: 0 auto;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  overflow: hidden;

  &[data-active="true"] {
    box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.08);
  }
`

const ESearchInput = styled.input`
  border: 0;
  border-radius: 6px;
  width: 100%;
  height: 50px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #525151;
  padding: 0 16px;

  @media (max-width: 640px) {
    font-size: 14px;
  }

  ::placeholder {
    color: #e4e4e4;
  }
`

const ESearch = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181930;
  right: 0;
  border-radius: 10px;
  height: 100%;
  color: #fff;
  font-weight: 500;
  padding: 5px 10px;
  margin: 0;
  border: 0;
  outline: 0;
`

const SCheckmarkWrapper = styled.button`
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  margin: 0 4px 0 0;
  outline: none;
  border-radius: 4px;
  background-color: var(--cyan-color);
  padding: 0;
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23181930;stroke-width:0.82px;%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' x='0.41' y='0.41' width='17.18' height='17.18' rx='2.86'/%3E%3C/svg%3E");

  &[data-selected="true"] {
    background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23181930;stroke:%23181930;stroke-width:0.82px;%7D.cls-2%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' x='0.41' y='0.41' width='17.18' height='17.18' rx='2.86'/%3E%3Cpath class='cls-2' d='M12.52,5.53a.62.62,0,1,1,.94.8L8.24,12.47a.62.62,0,0,1-.88.06L4.6,10.07a.62.62,0,0,1,.82-.92l2.29,2Z'/%3E%3C/svg%3E");
  }
`

export const SHeader = styled.h2`
  display: flex;
  flex-direction: column;
  color: #181930;
  font-family: "Nanotech", Arial, sans-serif;
  font-weight: 700;
  margin: 0 auto;
  max-width: 37em;
  line-height: 1;
  padding: 0;
  text-align: left;
  font-size: 3.3em;

  @media (max-width: 768px) {
    font-size: 1.8em;
    line-height: 1.4;
  }

  @media (max-width: 40em) {
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
    font-size: 2em;
  }
`

const EInputSendlinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10em;
  grid-column-gap: 8px;

  &[data-successmessage="true"] {
    display: none;
  }
`

const EInputSendlinkWrapper2 = styled.div`
  display: flex;
  margin-top: 1em;
  &[data-successmessage="true"] {
    display: none;
  }
`

const SmsSkika = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  &[data-successmessage="true"] {
    display: flex;
  }
`
