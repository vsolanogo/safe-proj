// import React, { useState, useContext, useEffect } from "react"

// import { getShowedSplash } from "../utils"

// const SplashContext = React.createContext()

// const TC_PATH = "terms-conditions"
// const PP_PATH = "privacy-policy"

// export const SplashProvider = ({ children }) => {
//   const [hideSplash, setHideSplash] = useState(false)

//   useEffect(() => {
//     setHideSplash(
//       (typeof window !== "undefined" &&
//         (window.location.pathname.includes(TC_PATH) ||
//           window.location.pathname.includes(PP_PATH))) ||
//         !!getShowedSplash()
//     )
//   }, [])

//   return (
//     <SplashContext.Provider value={{ hideSplash, setHideSplash }}>
//       {children}
//     </SplashContext.Provider>
//   )
// }

// export const useSplashContext = () => {
//   const value = useContext(SplashContext)

//   return value ? value : {}
// }
