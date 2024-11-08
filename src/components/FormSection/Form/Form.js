import React, { useRef } from "react"
import styled from "styled-components"

import { getRem } from "../../../utils"
import { TitleH1, Button, Text } from "../../index"
import { device } from "../../../styles"
import { size } from "../../../styles/helpers"
import { useFormatMessage } from "../../../hooks"
import { typographyCss } from "../../atoms"
import { Link } from "gatsby"
import { FormControl } from "./FormControl/FormControl"
import { preventNonNumericValue } from "./validator/validator"
import { SuccessMessage } from "./SuccessMessage/SuccessMessage"
import { useForm } from "./hooks/useForm"

const Wrapper = styled.div`
  width: 100%;
  border-radius: ${getRem(10)};
  background-color: ${({ theme, isBlueBg }) => isBlueBg && theme.colors.blue};
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;

  @media ${device.tablet} {
    padding-top: ${({ isBlueBg, withShadow }) =>
      isBlueBg || withShadow ? getRem(46) : 0};
    padding-bottom: ${({ isBlueBg, withShadow }) =>
      isBlueBg || withShadow ? getRem(48) : 0};
  }

  @media ${device.laptopL} {
    ${({ isBlueBg }) =>
      isBlueBg &&
      `    
      grid-row-start: 1;
      grid-column-start: 2;
      grid-row-end: 3;
      grid-column-end: 2;
      padding: ${getRem(48)} 0;`}
  }

  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const Content = styled.div`
  width: 100%;
  border-radius: ${getRem(10)};
  background-color: var(--white-color);
  padding: 0;
`

const FormS = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${getRem(4)};
`

const ButtonS = styled.button`
  margin: 18px auto 0;
  outline: none;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  border-radius: ${getRem(10)};
  background-color: var(--blue-color);
  color: var(--white-color);
  box-shadow: 1px 20px 20px -15px var(--bluetransparentshadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 224px;
  height: ${({ height }) => getRem(height)};
  padding: ${({ paddingY, paddingX }) =>
    `${getRem(paddingY)} ${getRem(paddingX)}`};

  &:hover,
  &:focus,
  &:disabled {
    background-color: var(--buttonhoverblue-color);
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${typographyCss};

  @media ${device.tablet} {
    width: ${({ withDetailInfo }) => (withDetailInfo ? "100%" : getRem(224))};
  }
`

const TextS = styled(Text)`
  font-size: 12px;
  line-height: 1.48;
  color: ${({ theme }) => theme.colors.stepperFontColor};
`

const LinkS = styled.a`
  line-height: 1.48;
  font-size: 12px;
  color: var(--blue-color);
`
const ApiError = styled.div`
  font-size: ${getRem(14)};
  color: #9e0019;
  height: ${getRem(48)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(158, 0, 25, 0.14);
  border-radius: ${getRem(10)};
  width: 100%;
  padding: 0 1em;
  margin-bottom: 1em;
`

const Subtitle = styled.div`
  font-size: ${getRem(14)};
  line-height: ${getRem(21)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #181930;
  text-align: center;
  margin-bottom: ${getRem(25)};
  margin-top: -${getRem(10)};
`

export const Form = ({ isBlueBg, withDetailInfo, withShadow }) => {
  const f = useFormatMessage()
  const {
    formValues,
    apiError,
    showSuccessMessage,
    setShowSuccessMessage,
    formErrors,
    formState,
    handleFormChange,
    handleInputChange,
    handleSubmit,
    validate,
  } = useForm()

  const { name, email, phoneNumber } = formValues
  const {
    name: nameErrors,
    email: emailErrors,
    phoneNumber: phoneErrors,
  } = formErrors

  return (
    <Wrapper withShadow={withShadow}>
      <Content withShadow={withShadow}>
        <TitleH1 as="h2" lineHeight={64} align="center" weight={700}>
          {f("formSection.form.title")}
        </TitleH1>
        <Subtitle>{f("formSection.form.subTitle")}</Subtitle>
        <FormS noValidate onSubmit={handleSubmit} onChange={handleFormChange}>
          <FormControl
            id="name"
            type="text"
            name="name"
            value={name}
            required
            labelText="formSection.form.placeholder.name"
            isActive={name.length}
            errors={nameErrors}
            onChange={event => handleInputChange(event, "name")}
            onBlur={event => validate(event, "name")}
          />
          <FormControl
            id="email"
            type="email"
            name="email"
            value={email}
            required
            labelText="formSection.form.placeholder.email"
            isActive={email.length}
            errors={emailErrors}
            onChange={event => handleInputChange(event, "email")}
            onBlur={event => validate(event, "email")}
          />
          <FormControl
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            labelText="formSection.form.placeholder.phone"
            isActive={phoneNumber.length}
            errors={phoneErrors}
            onChange={event => handleInputChange(event, "phoneNumber")}
            onBlur={event =>
              event.target.value && validate(event, "phoneNumber")
            }
            onKeyDown={event => preventNonNumericValue(event)}
          />
          {apiError && <ApiError>{apiError}</ApiError>}
          <SuccessMessage
            message="formSection.form.successMessage"
            isShown={showSuccessMessage}
            setIsShown={setShowSuccessMessage}
          />
          <ButtonS
            withDetailInfo={withDetailInfo}
            // weight={500}
            height={48}
            type="submit"
            disabled={formState.isSubmitting || !formState.isValid}
          >
            {f("formSection.form.submit")}
          </ButtonS>

          <p
            css={`
              font-family: Roboto;
              font-size: 10px;
              line-height: 1.3;
              color: #818c99;
              font-weight: 300;
              text-align: center;
            `}
          >
            Genom att använda kontaktformuläret samtycker jag till att SoSafe
            behandlar mina personuppgifter för återkoppling. Mer info hittas på{" "}
            <Link
              to="/privacy-policy"
              css={`
                font-size: inherit;
                color: #506efa;
                text-decoration: none;
                cursor: pointer;
              `}
            >
              Integritetspolicy
            </Link>
          </p>
        </FormS>
        {withDetailInfo && (
          <TextS marginY={16}>
            {f("contacts.form.description", {
              link: <LinkS href="#">{f("privacyPolicy")}</LinkS>,
            })}
          </TextS>
        )}
      </Content>
    </Wrapper>
  )
}
