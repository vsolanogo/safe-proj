import React from "react"
import styled from "styled-components"
import { getRem } from "../../utils"
import { size, device } from "../../styles"
import { useBannerContext } from "../../context"
import { DetailsContacts } from "./DetailsContacts"
import pattern from "../../assets/svg/contacts-pattern-1.svg"
import pattern2 from "../../assets/svg/contacts-pattern-2.svg"
import { ContactsForm } from "../FormSection/Form/ContactsForm"

const SectionS = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)};

  @media ${device.mobileL} {
    margin: 0 ${getRem(56)};
  }

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto;
  }

  width: ${({ maxWidth }) => maxWidth && "100%"};

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  padding-top: 5.25rem;
  overflow: hidden;
  min-height: 100vh;
  height: auto;
  padding-bottom: 94px;

  & + footer {
    margin-top: -50px;
  }

  @media ${device.mobileL} {
    justify-content: center;
  }

  @media ${device.tablet} {
    min-height: 100vh;
    height: auto;
  }

  @media ${device.laptop} {
    align-items: center;
    background: url(${pattern}) no-repeat 100% top,
      url(${pattern2}) no-repeat left 60%;
  }

  @media (max-width: ${size.tablet}px) {
    align-items: flex-start;
  }

  @media (max-width: ${size.laptop}px) {
    padding-bottom: 94px;
    overflow: auto;
  }

  &[data-isbannershow="true"] {
    padding-top: 9rem;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: flex-start;
  width: 100%;

  @media ${device.mobileL} {
    width: 464px;
  }

  @media ${device.tablet} {
    grid-template-columns: 367px auto;
    grid-template-rows: 1fr;
    grid-column-gap: 82px;
    width: ${getRem(832)};
  }

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    grid-template-columns: 50% auto;
    grid-column-gap: 50px;
    width: 100%;
  }

  @media ${device.laptop} {
    min-height: ${getRem(559)};
    height: auto;
    background: var(--white-color);
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: ${getRem(10)};
    padding: ${getRem(27)} ${getRem(47)} ${getRem(24)} ${getRem(47)};
    grid-column-gap: ${getRem(49)};
  }
`

const SImportantFix = styled.div``

export const Contacts = () => {
  const { isBannerShow } = useBannerContext()

  return (
    <SImportantFix>
      <SectionS data-isbannershow={isBannerShow}>
        <Wrapper>
          <ContactsForm />
          <DetailsContacts />
        </Wrapper>
      </SectionS>
    </SImportantFix>
  )
}
