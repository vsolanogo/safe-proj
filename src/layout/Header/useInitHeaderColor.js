// import { useState, useMemo } from "react"
// import { useLocation } from "@reach/router"
// import { useIntl } from "gatsby-plugin-intl"

// import { theme } from "../../styles"
// import { getPageTop } from "../../utils"

// export const useInitHeaderColor = ref => {
//   const [bgColor, setBgColor] = useState("transparent")
//   const { locale } = useIntl()
//   const { pathname } = useLocation()
//   const isHome =
//     pathname === "/" || pathname === `/${locale}/` || pathname === `/${locale}`

//   const initialColor = useMemo(() => {
//     if (!isHome) {
//       return theme.colors.darkFont
//     } else {
//       const topToPage = getPageTop(ref.current)

//       if (typeof window !== "undefined" && topToPage > window.innerHeight) {
//         return theme.colors.darkFont
//       }

//       return theme.colors.white
//     }
//   }, [isHome, locale])

//   return [initialColor, bgColor, setBgColor]
// }
