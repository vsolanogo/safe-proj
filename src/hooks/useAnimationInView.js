import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const defaultAnimation = {
  opacity: 1,
  y: 0,
}

export const useAnimationInView = (animation = defaultAnimation, option) => {
  const controls = useAnimation()
  const [ref, inView] = useInView(option)

  useEffect(() => {
    if (inView) {
      controls.start(animation)
    }
  }, [controls, inView, animation])

  return { ref, controls }
}
