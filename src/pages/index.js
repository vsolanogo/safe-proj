import React, { useReducer, useEffect } from "react"
import { WindowDimensions } from "../components/WindowDimensions"
import {
  HeroSection,
  FormSection,
  HomeSliderSection,
  HomeVideoSection,
  HomeSectionWithRadar,
} from "../components"
import { GlobalComponent } from "../components/GlobalComponent"
import { MainContext } from "../store/main/contexts"
import mainReducer from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
import { HeaderColorChangeHandler } from "../components/HeaderColorChangeHandler"

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, {
    splash: {
      hide: false,
    },
    header: {
      backgroundColor: "transparent",
      contentColor: "#fff",
      logoColor: "#fff",
    },
  })

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <>
          <Splash />

          <WindowDimensions
            render={({ width, height }) => {
              const topRange = height - 100

              return (
                <>
                  <HeaderColorChangeHandler
                    backgroundColorAfterHit={"#000"}
                    contentColorAfterHit={"#fff"}
                    logoColorAfterHit={"#fff"}
                    backgroundColorBeforeHit={"transparent"}
                    contentColorBeforeHit={"#fff"}
                    logoColorBeforeHit={"#fff"}
                    topRange={200}
                    bottomRange={200}
                  />
                  <div
                    css={`
                      background-color: #000;
                    `}
                  >
                    <Header />
                  </div>
                  <HeroSection width={width} height={height} />

                  <HeaderColorChangeHandler
                    backgroundColorAfterHit={"#fff"}
                    contentColorAfterHit={"#181930"}
                    logoColorAfterHit={"#181930"}
                    backgroundColorBeforeHit={"#000"}
                    contentColorBeforeHit={"#fff"}
                    logoColorBeforeHit={"#fff"}
                    topRange={topRange}
                    bottomRange={1500}
                  />
                  <HomeSliderSection width={width} />
                  <HomeVideoSection />
                  <HomeSectionWithRadar />
                  <FormSection paddingTop={36} />
                </>
              )
            }}
          />

          <Footer />
        </>
      </MainContext.Provider>
    </>
  )
}
