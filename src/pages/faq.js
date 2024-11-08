import React, { useReducer } from "react"
import { graphql } from "gatsby"

import { FormSection, FAQs } from "../components"
import { SimpleWayToCheck } from "../components/FAQs/SimpleWayToCheck"
import { GlobalComponent } from "../components/GlobalComponent"
import ShieldIcon from "../assets/svg/shield-check.inline.svg"
import { TopPageSection } from "../components/TopPageSection/TopPageSection"
import { MainContext } from "../store/main/contexts"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
import { SharedDivider } from "../components/shared"

export default function FAQ({ data }) {
  const [state, dispatch] = useReducer(mainReducer, mainReducerinitialValue)

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <Splash />

        <Header />

        <TopPageSection
          title={"aboutUs.topSection.title"}
          text={"aboutUs.topSection.text"}
          icon={ShieldIcon}
        />
        <FAQs content={data.allWordpressWlFaqPosts.edges} />

        <SharedDivider />
        <SharedDivider
          css={`
            @media (min-width: 1000px) {
              display: none;
            }
          `}
        />
        <SimpleWayToCheck />
        <SharedDivider />
        <SharedDivider
          css={`
            @media (min-width: 1000px) {
              display: none;
            }
          `}
        />

        <FormSection paddingTop={79} />

        <Footer />
      </MainContext.Provider>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressWlFaqPosts {
      edges {
        node {
          id
          title
          question
          answer
        }
      }
    }
  }
`