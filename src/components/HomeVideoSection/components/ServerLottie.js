import React from "react"
import runningServerAnimation from "../../../assets/animations/running-server.json"
import { useInView } from "react-intersection-observer"
import Lottie from "lottie-react-web"

export const ServerLottie = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <div ref={ref}>
      <Lottie
        options={{
          animationData: runningServerAnimation,
          renderer: "canvas",
          autoplay: false,
        }}
        autoplay={false}
        isPaused={!inView}
      />
    </div>
  )
}
