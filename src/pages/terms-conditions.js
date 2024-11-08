import React, { useReducer } from "react"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import ContentPage from "../components/ContentPage/ContentPage"
import { MainContext } from "../store/main/contexts"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
import { GlobalComponent } from "../components/GlobalComponent"

export default function Terms() {
  const [state, dispatch] = useReducer(mainReducer, mainReducerinitialValue)

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <Header />
        <ContentPage slug={"terms"} />

        <Footer />
      </MainContext.Provider>
    </>
  )
}
