import React, { useState } from "react"
import styled, { css } from "styled-components"
import { SharedH1Nanotech, TextRoboto } from "../shared"
import { pressOnlyNumbersAndPlus } from "../../utils/PressOnlyNumbers"
import { useInput, useFocus } from "react-hookedup"
import { useIntl } from "gatsby-plugin-intl"
import { useFormatMessage } from "../../hooks"
import img1 from "../../assets/svg/circleCheckmark.svg"
import axios from "axios"

var pattern = /^\+?\d{9,13}/

export const FourthComponent = () => {
  const [numberIsValid, setNumberIsValid] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [agreedPolicy, setAgreedPolicy] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const searchFocus = useFocus()
  const searchInput = useInput("")
  const f = useFormatMessage()
  const intl = useIntl()

  const handleChange = e => {
    setInputValue(e.target.value)

    if (pattern.test(e.target.value)) {
      setNumberIsValid(true)
    } else {
      setNumberIsValid(false)
    }
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
      .get(
        `https://app.sosafe.io/app/fake-emergency/send-sms/${inputValue}?lang=swe`
      )
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
        background-color: #fafbfc;
        padding-top: 3em;
        padding-bottom: 7em;
      `}
    >
      <SWrapper>
        <SharedH1Nanotech
          css={`
            padding: 0;
          `}
        >
          <span
            css={`
              all: inherit;
              font-weight: 300;
            `}
          >
            {f("emergencyInfo.fourthComponent.h1")}
          </span>{" "}
          {f("emergencyInfo.fourthComponent.h2")}
        </SharedH1Nanotech>

        <STextRobotoDescription data-dontdisplay={intl && intl.locale === "sv"}>
          Can thorugh the shared sound and the location information assess the
          situation the caller is in.{" "}
          <b
            css={css`
              font-weight: 400;
            `}
          >
            SoSafe
          </b>{" "}
          makes sure that you, the emergency contact is updated and knows what
          is happening when help is called.
        </STextRobotoDescription>

        <STextRobotoDescription data-dontdisplay={intl && intl.locale === "en"}>
          Du kan genom det delade ljudet och platsinformationen bedömma
          situationen som anroparen befinner sig i. Skicka en{" "}
          <b
            css={css`
              font-weight: 600;
            `}
          >
            testlänk
          </b>{" "}
          till din mobil för att se hur allt funkar. På så sätt är du förbredd
          ifall något skulle inträffa.
        </STextRobotoDescription>
      </SWrapper>

      <div
        css={css`
          padding: 0 2em;
        `}
      >
        <SForm data-isloading={!!isLoading}>
          <SSuccessMessage data-display={successMessage}>
            <div
              css={`
                background: #edfdfa;
                border-radius: 10px;
                display: flex;
                padding: 1em 0;
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
          </SSuccessMessage>
          <div
            css={`
              display: flex;
              margin: 0 0 1em 0;
            `}
          >
            <TextRoboto
              css={`
                padding: 0 0.1em;
                font-weight: 400;
                font-size: 1.04em;
                margin: 0;
              `}
            >
              {f("emergencyInfo.getlinkBySms")}
            </TextRoboto>

            <p
              css={`
                padding: 0.2em 0.4em;
                color: var(--blue-color);
                background: #eef1ff;
                font-family: Roboto, Arial, sans-serif;
                margin: 0;
                display: flex;
                line-height: 1;
                margin-left: 0.3em;
                border-radius: 4px;
                font-weight: 400;
                align-self: center;
              `}
            >
              {f("emergencyInfo.itsfree")}
            </p>
          </div>

          <Wrapper data-active={searchFocus.focused}>
            <ESearchInput
              placeholder={f("emergencyInfo.yournumber")}
              {...searchInput.bindToInput}
              onFocus={() => {
                searchFocus.bind.onFocus()
              }}
              onBlur={() => {
                searchFocus.bind.onBlur()
              }}
              value={inputValue}
              onChange={handleChange}
              onKeyPress={pressOnlyNumbersAndPlus}
              type="tel"
            />

            <div
              css={`
                position: relative;
              `}
            >
              <ESearch onClick={handleSubmitClick}>
                {f("emergencyInfo.sendtestlink")}
              </ESearch>
            </div>
          </Wrapper>

          <div
            css={`
              display: flex;
              margin-top: 1em;
            `}
          >
            <SCheckmarkWrapper
              data-selected={agreedPolicy}
              onClick={() => {
                setAgreedPolicy(!agreedPolicy)
              }}
            ></SCheckmarkWrapper>

            <TextRoboto
              css={`
                padding: 0 0.1em;
                font-weight: 400;
                font-size: 1.03em;
                margin: 0;
              `}
            >
              {f("emergencyInfo.iagreewith")}
            </TextRoboto>

            <TextRoboto
              css={`
                padding: 0 0.1em;
                font-weight: 400;
                font-size: 1.03em;
                margin: 0;
                text-decoration: underline;
                color: var(--blue-color);
              `}
              as="a"
              href="/privacy-policy"
            >
              {f("emergencyInfo.privacypolicy")}
            </TextRoboto>
          </div>
        </SForm>
      </div>
    </div>
  )
}

const SWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: auto;
  max-width: 58em;
  padding: 0 2em;
`

const SForm = styled.div`
  background: #fff;
  box-shadow: 0px -3px 59px rgba(41, 41, 42, 0.05);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 22px 33px;
  max-width: 100%;
  width: 31em;
  margin: auto;
  position: relative;
  overflow: hidden;

  &[data-isloading="true"] {
    * {
      cursor: progress !important;
    }
  }
`

const SSuccessMessage = styled.div`
  background: #fff;
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 22px 33px;
  left: 0;
  top: 0;
  display: none;

  &[data-display="true"] {
    display: flex;
  }
`

const Wrapper = styled.div`
  max-width: 106em;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 60px;
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
  background-color: var(--cyan-color);
  position: absolute;
  right: 0;
  border-radius: 10px;
  height: 100%;
  border: 4px solid #fff;
  color: #181930;
  min-width: 122px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  border: 0;

  img {
    height: 18px;
  }

  :hover {
    background-color: #43c7aa;
  }

  :active {
    background-color: #54eccb;
  }
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
  padding: 0;
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;stroke:%23e4e4e4;%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' x='0.5' y='0.5' width='17' height='17' rx='2.5'/%3E%3C/svg%3E");

  &[data-selected="true"] {
    background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%234be8c5;stroke:%234be8c5;stroke-width:0.82px;%7D.cls-2%7Bfill:%23181930;%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' x='0.41' y='0.41' width='17.18' height='17.18' rx='2.86'/%3E%3Cpath class='cls-2' d='M12.52,5.53a.62.62,0,1,1,.94.8L8.24,12.47a.62.62,0,0,1-.88.06L4.6,10.07a.62.62,0,0,1,.82-.92l2.29,2Z'/%3E%3C/svg%3E");
  }
`

const STextRobotoDescription = styled.p`
  color: #181930;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 1em;
  padding: 0;
  margin: 1.5em auto 1em auto;
  font-weight: 300;
  line-height: 1.8;
  text-align: center;
  max-width: 35em;

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }

  &[data-dontdisplay="true"] {
    display: none;
  }
`
