import React, { useReducer } from "react"

import { Contacts } from "../components"
import { GlobalComponent } from "../components/GlobalComponent"
import { MainContext } from "../store/main/contexts"
import mainReducer, { mainReducerinitialValue } from "../store/main/reducers"
import { Header } from "../layout/Header/Header"
import { Footer } from "../layout/Footer"
import { Splash } from "../layout/Splash"
export default function ContactsPage() {
  const [state, dispatch] = useReducer(mainReducer, mainReducerinitialValue)

  return (
    <>
      <GlobalComponent />

      <MainContext.Provider value={{ state, dispatch }}>
        <Splash />

        <Header />
        <Contacts />
        <Footer />
      </MainContext.Provider>
    </>
  )
}
