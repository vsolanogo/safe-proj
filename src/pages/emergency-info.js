import React, { useReducer, useEffect } from "react"
import { WindowDimensions } from "../components/WindowDimensions"
import { FormSection } from "../components"
import { GlobalComponent } from "../components/GlobalComponent"
import { MainContext } from "../store/main/contexts"
import mainReducer from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
import { HeaderColorChangeHandler } from "../components/HeaderColorChangeHandler"
import { SharedDivider, SharedH1 } from "../components/shared"
import styled, { css } from "styled-components"
import { FirstComponent } from "../components/emergency-info/FirstComponent"
import { SecondComponent } from "../components/emergency-info/SecondComponent"
import { ThirdComponent } from "../components/emergency-info/ThirdComponent"
import { FourthComponent } from "../components/emergency-info/FourthComponent"
import { FifthComponent } from "../components/emergency-info/FifthComponent"

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, {
    splash: {
      hide: false,
    },
    header: {
      backgroundColor: "#fff",
      contentColor: "#181930",
      logoColor: "#181930",
    },
  })

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <>
          <Splash />
          <HeaderColorChangeHandler
            backgroundColorAfterHit={"#fff"}
            contentColorAfterHit={"#181930"}
            logoColorAfterHit={"#181930"}
            backgroundColorBeforeHit={"#fff"}
            contentColorBeforeHit={"#181930"}
            logoColorBeforeHit={"#181930"}
            topRange={200}
            bottomRange={100}
          />

          <Header />
          <SharedDivider count={2} />

          <FirstComponent />

          <HeaderColorChangeHandler
            backgroundColorAfterHit={"#fff"}
            contentColorAfterHit={"#181930"}
            logoColorAfterHit={"#181930"}
            backgroundColorBeforeHit={"#fff"}
            contentColorBeforeHit={"#181930"}
            logoColorBeforeHit={"#181930"}
            topRange={100}
            bottomRange={1500}
          />

          <WindowDimensions
            render={({ width, height }) => (
              <SecondComponent width={width} height={height} />
            )}
          />

          <SharedDivider count={1.5} />

          <ThirdComponent />

          <FourthComponent />

          <FifthComponent />

          <SharedDivider />

          <FormSection paddingTop={36} />
          <Footer />
        </>
      </MainContext.Provider>
    </>
  )
}
