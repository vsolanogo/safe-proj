import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as types from "prop-types"
import lottie from "lottie-web"

const LottieContainer = styled.div`
  width: ${({ width = "150px" }) => width};
  height: ${({ height, width = "150px" }) => height ? height : width};
  animation: show 1.5s linear;
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LottieComponent = ({
  animationData,
  renderType,
  loop,
  stopAnimation,
  ...restProps
}) => {
  const animationContainerRef = useRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainerRef.current,
      loop: loop,
      renderer: renderType,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    })

    stopAnimation ? anim.stop() : anim.play()

    return () => {
      anim && anim.destroy()
    }
  }, [stopAnimation])

  return  (
    <LottieContainer
      ref={animationContainerRef}
      { ...restProps }
    />
  )
}

LottieComponent.propTypes = {
  animationData: types.object.isRequired,
  renderType: types.string,
  autoplay: types.bool,
  stopAnimation: types.bool,
  loop: types.bool,
}

LottieComponent.defaultProps = {
  renderType: "canvas",
  loop: true,
  stopAnimation: false,
}