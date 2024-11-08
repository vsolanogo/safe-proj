import React from "react"
import styled from "styled-components"

import {
  Title,
  Text,
  // Button
} from "../../.."
// import Android from "../../../../assets/svg/android-icon.svg"
// import Apple from "../../../../assets/svg/apple-icon.svg"
import { getRem } from "../../../../utils"
// import { theme } from "../../../../styles"
// import { marketsLinks } from "../../../../config"
import { device } from "../../../../styles"
import { useFormatMessage } from "../../../../hooks"

// const ButtonsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: ${getRem(124)} 1fr;
//   grid-column-gap: ${getRem(16)};
//   margin-top: ${getRem(21)};
//   align-self: flex-start;

//   @media ${device.tablet} {
//     grid-template-columns: ${getRem(178)} 1fr;
//     margin-top: ${getRem(41)};
//   }
// `

// const ButtonS = styled(Button)`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   padding: ${getRem(10)} ${getRem(10)};
//   width: 124px;
//   height: 60px;

//   @media ${device.tablet} {
//     width: 176px;
//     padding: ${getRem(10)} ${getRem(30)};
//   }
// `

const TitleS = styled(Title)`
  align-self: flex-end;
  @media ${device.tablet} {
    line-height: ${getRem(51.8)};
  }
`

// const StoreButton = ({ store, icon: Icon, href }) => {
//   return (
//     <ButtonS target="blank" type="gray" style={styleButton} href={href}>
//       <Icon width={20} height={20} />
//       <span>
//         <Text
//           lineHeight={21}
//           align="left"
//           color={theme.colors.white}
//           marginY={0}
//         >
//           Get on the
//         </Text>
//         <Text weight={600} align="left" color={theme.colors.white} marginY={0}>
//           {store}
//         </Text>
//       </span>
//     </ButtonS>
//   )
// }

export const DefaultContent = ({ title, text }) => {
  const f = useFormatMessage()
  return (
    <>
      <TitleS>
        {f(title)}
      </TitleS>
      <Text lineHeight={21} marginY={0}>
        {f(text)}
      </Text>
      {/* <ButtonsWrapper>
        <StoreButton
          icon={Apple}
          store="Apple store"
          href={marketsLinks.apple}
        />
        <StoreButton
          icon={Android}
          store="Google Play"
          href={marketsLinks.google}
        />
      </ButtonsWrapper> */}
    </>
  )
}
