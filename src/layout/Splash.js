import React, { useEffect, useRef, useContext, useState } from "react"
import lottie from "lottie-web"
import styled from "styled-components"
import splashAnimation from "../assets/animations/splash.json"
import { getShowedSplash, setShowedSplash } from "../utils"
import { MainContext } from "../store/main/contexts"
import { Helmet } from "react-helmet"
import { useTimeout } from "usehooks-ts"

const Component = React.memo(
  ({ hideSplash, dispatch }) => {
    const [removeSelf, setRemoveSelf] = useState(false)
    const animContainer = useRef()

    useTimeout(() => {
      if (hideSplash) {
        setRemoveSelf(true)
      }
    }, 2222)

    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: animContainer.current,
        loop: false,
        renderer: "canvas",
        autoplay: true,
        animationData: splashAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      })

      animation.addEventListener("complete", onAnimationComplete)

      return () => {
        animation.removeEventListener("complete", onAnimationComplete)
        animation.destroy()
      }
    }, [])

    const onAnimationComplete = () => {
      dispatch({ type: "HIDE_SPLASH" })
      setShowedSplash()
    }

    if (removeSelf) {
      return false
    }

    return (
      <>
        <Wrapper data-hidesplash={hideSplash} id="splashComponentImportant">
          <LottieContainer ref={animContainer} />
        </Wrapper>
      </>
    )
  },
  (prev, next) => prev.hideSplash === next.hideSplash
)

export const Splash = () => {
  const { state, dispatch } = useContext(MainContext)
  const dontDisplay = getShowedSplash()

  useEffect(() => {
    if (dontDisplay && !state.splash.hide) {
      dispatch({ type: "HIDE_SPLASH" })
    }
  }, [dontDisplay, state.splash.hide])

  return (
    <>
      <Component dispatch={dispatch} hideSplash={state.splash.hide} />
      {!state.splash.hide && (
        <Helmet>
          <style type="text/css">
            {`html {
              overflow: hidden;}
            `}
          </style>
        </Helmet>
      )}

      {state.splash.hide && (
        <Helmet>
          <style type="text/css">
            {`
            html {
              overflow: visible;
              overflow-x: hidden;
              overflow-y: auto;
            }
            `}
          </style>
        </Helmet>
      )}
    </>
  )
}

const Wrapper = styled.div`
  transition: all 0.3s ease-out;
  position: fixed;
  background-color: var(--black-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999991;

  div {
    position: relative;
    left: -10px;
    top: -20px;
  }

  filter: opacity(1);
  visibility: visible;

  &[data-hidesplash="true"] {
    filter: opacity(0);
    visibility: hidden;
  }
`

const LottieContainer = styled.div`
  width: 320px;
  height: 320px;
`
