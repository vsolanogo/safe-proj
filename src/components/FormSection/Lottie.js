import React from "react"
import { useInView } from "react-intersection-observer"
import Lottie from "lottie-react-web"
import formImageBlockAnimation from "../../assets/animations/form-section-animation"

export const LottieComponent = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <div ref={ref}>
      <Lottie
        options={{
          animationData: formImageBlockAnimation,
          renderer: "canvas",
          autoplay: false,
        }}
        autoplay={false}
        isPaused={!inView}
      />
    </div>
  )
}
