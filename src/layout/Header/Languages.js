import React, { useState, useCallback } from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-intl"
import { Dropdown, DropdownItem, DropdownMenu } from "styled-dropdown-component"
import styled from "styled-components"

import { Button } from "../../components"
import DropdownArrow from "../../assets/svg/dropdown-arrow.inline.svg"
import { langs } from "../../config"
import { getRem } from "../../utils"
import { device, size } from "../../styles"
import { useWindowSize } from "../../hooks"

const StyledDropdownMenu = styled(DropdownMenu)`
  box-shadow: 10px 25px 36px rgba(41, 41, 42, 0.07);
  border-radius: ${getRem(10)};
  border: none;
  margin-top: ${getRem(7)};
  padding: ${getRem(9)} 0;
  min-width: ${getRem(40)};

  @media ${device.laptop} {
    min-width: ${getRem(166)};
    margin-left: -${getRem(134)};
  }

  @media ${device.desktop} {
    margin-left: 0;
  }
`

const StyledDropdownItem = styled(DropdownItem)`
  padding: ${getRem(7)} ${getRem(9)};
  margin: ${getRem(1)} ${getRem(11)} ${getRem(1)} ${getRem(7)};
  text-decoration: none;
  border-radius: ${getRem(10)};
  cursor: pointer;
  min-width: ${getRem(40)};

  @media ${device.laptop} {
    min-width: ${getRem(166)};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.dropdownItemHoverBg};
  }
`

const ButtonS = styled(Button)`
  height: ${getRem(40)};
  padding: 0 ${getRem(7)};

  @media ${device.laptop} {
    height: ${getRem(30)};
  }
`

export const Languages = ({ color }) => {
  const [hidden, setHidden] = useState(true)
  const { locale } = useIntl()
  const { width } = useWindowSize()
  const isTablet = width < size.laptop

  const handleChangeLang = useCallback(
    value => {
      value !== locale && changeLocale(value)
      setHidden(!hidden)
    },
    [locale, hidden]
  )

  return (
    <div>
      <Dropdown>
        <ButtonS
          color={color}
          dropdownToggle
          onClick={() => setHidden(!hidden)}
          icon={<DropdownArrow fill={color} />}
          revers
        >
          {langs[locale].short}
        </ButtonS>
        <StyledDropdownMenu
          toggle={() => setHidden(!hidden)}
          hidden={hidden}
          onClick={e => handleChangeLang(e.target.getAttribute("value"))}
        >
          <IntlContextConsumer>
            {({ languages }) =>
              languages.map(
                language =>
                  language !== locale && (
                    <StyledDropdownItem
                      selected={language === locale}
                      key={language}
                      value={language}
                    >
                      {isTablet ? langs[language].short : langs[language].full}
                    </StyledDropdownItem>
                  )
              )
            }
          </IntlContextConsumer>
        </StyledDropdownMenu>
      </Dropdown>
    </div>
  )
}
