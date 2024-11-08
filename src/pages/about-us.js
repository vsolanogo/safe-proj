import React, { useReducer } from "react"

import ShieldIcon from "../assets/svg/shield-check.inline.svg"
import { MainContext } from "../store/main/contexts"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
import {
  AboutUsSection2,
  FormSection,
} from "../components"
import { TopPageSection } from "../components/TopPageSection/TopPageSection"
import { GlobalComponent } from "../components/GlobalComponent"

export default function Home() {
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
        <AboutUsSection2 />
        <FormSection paddingTop={54} />

        <Footer />
      </MainContext.Provider>
    </>
  )
}
