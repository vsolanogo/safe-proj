// import { useLayoutEffect, useState, useCallback, useEffect } from "react"
// import { useLocation } from "@reach/router"
// import { useIntl } from "gatsby-plugin-intl"

// import { getPageTop } from "../../utils"
// import { theme } from "../../styles"
// import { useInitHeaderColor } from "./useInitHeaderColor"

// const { colors } = theme

// export const useHandlerChangeTheme = (ref, isBannerShow) => {
//   const [color, bgColor, setBgColor] = useInitHeaderColor(ref)

//   const [contentColor, setContentColor] = useState(color)
//   const { pathname } = useLocation()
//   const { locale } = useIntl()

//   const isHome =
//     pathname === "/" || pathname === `/${locale}/` || pathname === `/${locale}`

//   useEffect(() => {
//     if (contentColor !== color) {
//       setContentColor(color)
//     }
//   }, [color])

//   const handleScroll = useCallback(
//     e => {
//       if (ref.current && typeof window !== "undefined") {
//         const topToPage = getPageTop(ref.current)

//         if (topToPage < 10 && bgColor !== "transparent") {
//           setBgColor("transparent")
//           return
//         }

//         if (
//           topToPage >= 10 &&
//           bgColor !== color &&
//           topToPage < window.innerHeight
//         ) {
//           if (isHome) {
//             setContentColor(colors.white)
//           }
//           setBgColor(color)
//           return
//         }

//         if (isHome) {
//           if (topToPage > window.innerHeight && bgColor !== colors.darkFont) {
//             setBgColor(colors.darkFont)
//             setContentColor(colors.darkFont)
//             return
//           }
//         }
//       }
//     },
//     [ref, isBannerShow, bgColor, color, isHome]
//   )

//   useLayoutEffect(() => {
//     if (window !== "undefined") {
//       window.addEventListener("scroll", handleScroll)
//     }

//     return () => {
//       if (window !== "undefined") {
//         return window.removeEventListener("scroll", handleScroll)
//       }
//     }
//   }, [handleScroll])

//   return { bgColor, contentColor }
// }
