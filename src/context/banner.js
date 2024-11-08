import React, { useContext } from "react"

import { useCheckAppOnStore } from "../hooks"

const BannerContext = React.createContext()

export const BannerProvider = ({ children }) => {
  const [
    isBannerShow,
    checkAppOnStore,
    toggleCheckAppOnStore,
  ] = useCheckAppOnStore()

  return (
    <BannerContext.Provider
      value={{ isBannerShow, checkAppOnStore, toggleCheckAppOnStore }}
    >
      {children}
    </BannerContext.Provider>
  )
}

export const useBannerContext = () => {
  const value = useContext(BannerContext)

  return value ? value : {}
}
