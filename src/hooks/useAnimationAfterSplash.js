// import { useEffect } from "react"
// import { useAnimation } from "framer-motion"

// import { useSplashContext } from "../context"

// const defaultAnimation = {
//   opacity: 1,
//   y: 0,
// }

// export const useAnimationAfterSplash = (animation = defaultAnimation) => {
//   const { hideSplash } = useSplashContext()
//   const controls = useAnimation()

//   useEffect(() => {
//     if (hideSplash) {
//       controls.start(animation)
//     }
//   }, [hideSplash, controls, animation])

//   return controls
// }
