import React from "react"
import styled from "styled-components"

import { Form } from "./Form/Form"
import { getRem } from "../../utils"
import { device, size } from "../../styles"
import { ImageBlock } from "./ImageBlock"

const SectionS = styled.section`
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: 0 ${getRem(8)} 2.62rem ${getRem(8)};

  @media ${device.laptopL} {
    max-width: ${getRem(1136)};
    margin: 0 auto 2.62rem auto;
  }

  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme, background }) =>
    background && theme.colors[background]};

  padding-top: ${({ paddingY }) => getRem(paddingY || 30)};
  position: relative;

  @media ${device.tablet} {
    padding-top: ${({ paddingY }) => getRem(paddingY || 60)};
  }

  display: grid;
  grid-row-gap: ${getRem(8)};
  height: 600px;
  padding-top: ${({ paddingTop }) => getRem(paddingTop || 74)};
  padding-bottom: ${({ paddingTop }) => getRem(paddingTop || 74)};
  grid-template-rows: 1fr;
  grid-template-columns: 50% 50%;
  box-shadow: 5px 10px 15px rgba(41, 41, 42, 0.07);
  border: 1px solid var(--borderlight-color);

  border-radius: 20px;
  background-color: var(--white-color);

  @media ${device.tablet} {
    grid-row-gap: ${getRem(16)};
  }

  @media ${device.laptopL} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${getRem(30)};
  }

  @media (max-width: ${size.tablet}px) {
    margin: 0 ${getRem(8)} ${getRem(25)};
    grid-template-columns: 1fr;
    height: auto;
  }
`

const FormWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${getRem(418)};
  padding: 0 25px;

  @media (min-width: ${size.tablet}px) and (max-width: ${size.laptop}px) {
    width: 100%;
  }

  @media (min-width: ${size.mobileXL}px) and (max-width: ${size.tablet}px) {
    width: ${getRem(418)};
  }

  @media (max-width: ${size.mobileXL}px) {
    width: 100%;
    padding: 0 9px;
  }
`

export const FormSection = ({ paddingTop }) => {
  return (
    <SectionS id="contact-form" paddingTop={paddingTop}>
      <ImageBlock />
      <FormWrapper>
        <Form withShadow />
      </FormWrapper>
    </SectionS>
  )
}
