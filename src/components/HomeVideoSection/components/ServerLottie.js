import React from "react"
import { useInView } from "react-intersection-observer"

export const ServerLottie = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <div ref={ref}>

    </div>
  )
}
