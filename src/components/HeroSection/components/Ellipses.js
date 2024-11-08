import { range } from "lodash"
import React, { useEffect, useRef, useState, useMemo } from "react"
import styled from "styled-components"
import { PulsatingEllipse } from "./PulsatingEllipse"

const SWrapper = styled.div`
  background-color: transparent;
  font-family: sans-serif;
  left: 0;
  top: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  width: 100vw;
  z-index: 10;
`

const SAngle1 = styled.div`
  z-index: 100;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 200vh;
  width: 80vw;
  transform: scaleX(4) scaleY(1) scaleZ(1) rotateX(25deg) rotateY(4deg)
    rotateZ(12deg) translateX(4%) translateY(-70%) translateZ(0) skewX(-3deg)
    skewY(-28deg);

  background: linear-gradient(
        to bottom right,
        #000 10%,
        #000 37%,
        RGBA(0, 0, 0, 0.9) 41%,
        RGBA(0, 0, 0, 0.8) 42%,
        RGBA(0, 0, 0, 0.7) 43%,
        RGBA(0, 0, 0, 0.6) 44%,
        RGBA(0, 0, 0, 0.5) 45%,
        RGBA(0, 0, 0, 0.4) 46%,
        RGBA(0, 0, 0, 0.3) 47%,
        RGBA(0, 0, 0, 0.2) 48%,
        RGBA(0, 0, 0, 0.1) 49%,
        RGBA(0, 0, 0, 0) 50%
      )
      bottom right,
    linear-gradient(
        to bottom left,
        #000 10%,
        #000 37%,
        RGBA(0, 0, 0, 0.9) 41%,
        RGBA(0, 0, 0, 0.8) 43%,
        RGBA(0, 0, 0, 0.6) 44%,
        RGBA(0, 0, 0, 0.5) 45%,
        RGBA(0, 0, 0, 0.4) 46%,
        RGBA(0, 0, 0, 0.3) 47%,
        RGBA(0, 0, 0, 0.2) 48%,
        RGBA(0, 0, 0, 0.1) 49%,
        RGBA(0, 0, 0, 0) 50%
      )
      bottom left,
    linear-gradient(to top left, #fff 0%, #fff 50%) top left,
    linear-gradient(to top right, #fff 0%, #fff 50%) top right;

  background-size: 50% 50%;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    display: none;
  }
`

const SAngle2 = styled.div`
  z-index: 100;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200vh;
  width: 80vw;
  transform: scaleX(-5) scaleY(-1) scaleZ(1) rotateX(25deg) rotateY(4deg)
    rotateZ(13deg) translateX(-15.5%) translateY(-75%) translateZ(0)
    skewX(-3deg) skewY(-28deg);

  background: linear-gradient(
        to bottom right,
        #000 10%,
        #000 37%,
        RGBA(0, 0, 0, 0.922) 41%,
        RGBA(0, 0, 0, 0.822) 42%,
        RGBA(0, 0, 0, 0.722) 43%,
        RGBA(0, 0, 0, 0.622) 44%,
        RGBA(0, 0, 0, 0.522) 45%,
        RGBA(0, 0, 0, 0.422) 46%,
        RGBA(0, 0, 0, 0.322) 47%,
        RGBA(0, 0, 0, 0.2222) 48%,
        RGBA(0, 0, 0, 0.122) 49%,
        RGBA(0, 0, 0, 0) 50%
      )
      bottom right,
    linear-gradient(
        to bottom left,
        #000 10%,
        #000 37%,
        RGBA(0, 0, 0, 0.922) 41%,
        RGBA(0, 0, 0, 0.822) 43%,
        RGBA(0, 0, 0, 0.622) 44%,
        RGBA(0, 0, 0, 0.522) 45%,
        RGBA(0, 0, 0, 0.422) 46%,
        RGBA(0, 0, 0, 0.322) 47%,
        RGBA(0, 0, 0, 0.222) 48%,
        RGBA(0, 0, 0, 0.122) 49%,
        RGBA(0, 0, 0, 0) 50%
      )
      bottom left,
    linear-gradient(to top left, #fff 0%, #fff 50%) top left,
    linear-gradient(to top right, #fff 0%, #fff 50%) top right;

  background-size: 50% 50%;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    display: none;
  }
`

const SCanvas = styled.canvas`
  all: initial;
  z-index: 1 !important;
  background-color: transparent !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  overflow: visible !important;
  height: unset;
  width: unset;
`

const maxVals = [
  184 / 1.75,
  284 / 1.75,
  404 / 1.75,
  544 / 1.75,
  704 / 1.75,
  884 / 1.75,
  1084 / 1.75,
  1304 / 1.75,
  1544 / 1.75,
  1784 / 1.75,
  2044 / 1.75,
  2328 / 1.75,
  2640 / 1.75,
  3040 / 1.75,
  3540 / 1.75,
]

const maxValsSmall = [
  184 / 2.3,
  284 / 2.3,
  404 / 2.3,
  544 / 2.3,
  704 / 2.3,
  884 / 2.3,
  1084 / 2.3,
  1304 / 2.3,
  1544 / 2.3,
  1784 / 2.3,
  2044 / 2.3,
  2328 / 2.3,
  2640 / 2.3,
  3040 / 2.3,
  3540 / 2.3,
]

const initialVals = [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96]

const pihalf = parseFloat((Math.PI / 2).toFixed(4))
const pi2 = parseFloat((Math.PI * 2).toFixed(4))

const linecolor = "#1f5f50"

const Component = ({
  drawEllipse = false,
  setCanvasIsDrawn,
  ellipseShiftX,
  ellipseShiftY,
  canvasIsDrawn,
  width,
  heightToUse,
  inView,
}) => {
  const canvasRef = useRef(null)

  const [elipsesAlreadyDrawn, canvasEllipsesDrawnAlready] = useState(false)

  useEffect(() => {
    if (drawEllipse) {
      canvasEllipsesDrawnAlready(true)

      let timer1 = setTimeout(() => {
        setCanvasIsDrawn(true)
      }, 2500)

      drawCanvasElipses()

      window.addEventListener("resize", drawCanvasElipses, false)

      return () => {
        window.removeEventListener("resize", drawCanvasElipses)
        clearTimeout(timer1)
      }
    }
  }, [
    drawEllipse,
    elipsesAlreadyDrawn,
    ellipseShiftX,
    ellipseShiftY,
    heightToUse,
    width,
    inView,
  ])

  const drawCanvasElipses = () => {
    let lowFps = false
    let maxValsSelected = window.innerWidth < 1183 ? maxValsSmall : maxVals

    canvasRef.current.style.left = 0
    canvasRef.current.style.top = 0

    const ctx = canvasRef.current.getContext("2d")

    let width = window.innerWidth
    let height = heightToUse
    canvasRef.current.width = width
    canvasRef.current.height = height

    let arr = initialVals

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      arr.forEach(i => {
        ctx.strokeStyle = linecolor
        ctx.beginPath()
        ctx.ellipse(
          Math.floor(window.innerWidth / 2) + ellipseShiftX,
          Math.floor(heightToUse / 2) + ellipseShiftY,
          Math.floor(i / 2),
          i,
          pihalf,
          0,
          pi2
        )
        ctx.stroke()
        ctx.lineWidth = 0.75
      })
    }

    const update = () => {
      arr = arr.map((i, index) => {
        if (maxValsSelected[index] < arr[index]) {
          return arr[index]
        }

        // if (lowFps) {
        //   return i + 50
        // }

        return i + Math.log(maxValsSelected[index] - arr[index])
      })

      if (elipsesAlreadyDrawn) {
        arr = maxValsSelected
      }
    }

    let lastCall, fps

    // const detectFps = () => {
    //   let delta

    //   if (lastCall) {
    //     delta = (Date.now() - lastCall) / 1000
    //     lastCall = Date.now()
    //     fps = 1 / delta
    //   } else {
    //     lastCall = Date.now()
    //     fps = 0
    //   }
    // }

    // const range = []
    // let hasCalculatedFps = false

    const loop = () => {
      // if (!hasCalculatedFps) {
      //   detectFps()

      //   if (fps > 0 && range.length < 10) {
      //     range.push(fps)
      //   } else if (range.length === 10) {
      //     console.log(range.reduce((a, b) => a + b, 0) / range.length < 20)
      //     if (range.reduce((a, b) => a + b, 0) / range.length < 20) {
      //       lowFps = true
      //     }
      //     hasCalculatedFps = true
      //   }
      // }

      if (10 + arr[14] > maxValsSelected[14]) {
        return
      }

      requestAnimationFrame(loop)
      update()
      draw()
    }

    loop()
  }

  return (
    <>
      <SCanvas ref={canvasRef} />
      <PulsatingEllipse
        canvasIsDrawn={canvasIsDrawn}
        heightToUse={heightToUse}
        inView={inView}
      />
      <SWrapper
        style={{
          height: heightToUse,
        }}
      >
        <SAngle1 />
        <SAngle2 />
      </SWrapper>
    </>
  )
}

// transform: translateX(16em) translateY(5em);
//224 70
// @media (max-width: 1700px) {
//   transform: translateX(11em) translateY(5em);
//154 70
// }

// @media (max-width: 1550px) {
//   transform: translateX(6em) translateY(5em);
// 84 70
// }

// @media (max-width: 1439px) {
//   transform: translateX(1em) translateY(5em);
// 14 70
// }

// @media (max-width: 1024px) {
//   transform: translateX(-5em) translateY(33%);
// -70 33vw
// }

export const Ellipses = props => {
  const width = props.width
  const heightToUse = props.heightToUse

  const ellipseShiftX = useMemo(() => {
    if (width < 1024) {
      return -70
    } else if (width < 1439) {
      return 14
    } else if (width < 1550) {
      return 84
    } else if (width < 1700) {
      return 154
    } else {
      return 224
    }
  }, [width])

  const ellipseShiftY = useMemo(() => {
    if (width < 1024) {
      return heightToUse * 0.33
    } else {
      return 70
    }
  }, [width, heightToUse])

  return (
    <Component
      {...props}
      ellipseShiftX={ellipseShiftX}
      ellipseShiftY={ellipseShiftY}
    />
  )
}
