import React, { useReducer } from "react"

import { NotFound } from "../components"
import { GlobalComponent } from "../components/GlobalComponent"
import { MainContext } from "../store/main/contexts"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"

export default function NotFoundPage() {
  const [state, dispatch] = useReducer(mainReducer, mainReducerinitialValue)

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <Header />

        <NotFound />

        <Footer />
      </MainContext.Provider>
    </>
  )
}
