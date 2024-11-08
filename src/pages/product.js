import React, { useReducer } from "react"

import { FormSection, HowItWorks } from "../components"
import { GlobalComponent } from "../components/GlobalComponent"
import SmileIcon from "../assets/svg/smile.inline.svg"
import { TopPageSection } from "../components/TopPageSection/TopPageSection"
import { MainContext } from "../store/main/contexts"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
export default function Product() {
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
          icon={SmileIcon}
        />
        <HowItWorks />
        <FormSection />

        <Footer />
      </MainContext.Provider>
    </>
  )
}
