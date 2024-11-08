// import React, { useEffect } from "react"
// import * as PropTypes from "prop-types"
// import styled from "styled-components"
// import {
//   drawSetting,
//   getCenterOfEllipsis,
//   getCanvasSizes,
//   getRY,
// } from "../helpers/helpers"
// import { useWindowSize } from "../../../hooks"
// import { ellipsis } from "../helpers/data"
// import Sketch from "../../client-side/react-p5"

// export const Canvas = ({ drawEllipse = true, isBannerShow=false, setDrawnEllipses }) => {
//   const speed = 3
//   let timerId = null

//   const windowSizes = useWindowSize()
//   const canvasSizes = getCanvasSizes(windowSizes)

//   const centerOfEllipsis = getCenterOfEllipsis(canvasSizes, isBannerShow)

//   useEffect(() => {
//     return () => {
//       ellipsis.forEach(ellipse => {
//         ellipse.isDone = false
//         ellipse.radius = 1
//       })
//     }
//   }, [])

//   drawSetting.x0 = centerOfEllipsis.x0
//   drawSetting.y0 = centerOfEllipsis.y0

//   const setUp = (p5, canvasParentRef) => {
//     p5.createCanvas(
//       800 + canvasSizes.width || p5.windowWidth,
//       canvasSizes.height || p5.windowHeight
//     ).parent(canvasParentRef)
//     p5.frameRate(60)
//   }

//   const drawCanvas = p5 => {
//     p5.background(0)

//     if (drawEllipse) {
//       for (const _ellipse of ellipsis) {
//         drawEllipses(p5, _ellipse)
//       }

//       // if all ellipses are drawn, stop draw() function loop
//       if (ellipsis[ellipsis.length - 1].isDone) {
//         p5.noLoop()
//         // setDrawnEllipses(true)
//         // timerId = setTimeout(() => {
//         //   setShowDots(true)
//         // }, 2000)
//       }
//     }
//   }

//   useEffect(() => {
//     return () => timerId && clearTimeout(timerId)
//   }, [])

//   const drawEllipses = (p5, _ellipse) => {
//     const { sizeX, radius } = _ellipse

//     let maxWidth = radius
//     let maxHeight = getRY(maxWidth)
//     let radiusProgression = 0

//     if (sizeX - maxWidth > 1) {
//       radiusProgression = p5.log(sizeX - maxWidth) * speed
//     }

//     if (!_ellipse.isDone && radiusProgression === 0) {
//       _ellipse.isDone = true
//     }

//     p5.ellipse(
//       drawSetting.x0,
//       drawSetting.y0,
//       Math.round(maxWidth),
//       Math.round(maxHeight)
//     )
//       .noFill()
//       .stroke("rgba(75, 232, 197, 0.7)")
//       .strokeWeight(0.75)

//     _ellipse.radius += radiusProgression
//   }

//   const onWindowResize = p5 => {
//     p5.resizeCanvas(800 + canvasSizes.width, canvasSizes.height)
//   }

//   return (
//     <>
//       <Sketch
//         style={{
//           position: "absolute",
//           top: 0,
//         }}
//         setup={setUp}
//         windowResized={onWindowResize}
//         draw={drawCanvas}
//       />
//     </>
//   )
// }

// Canvas.propTypes = {
//   drawEllipse: PropTypes.bool,
//   isBannerShow: PropTypes.bool,
//   setDrawnEllipses: PropTypes.func,
// }
