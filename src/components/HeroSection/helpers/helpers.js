import { ellipsis } from "./data"
import { size } from "../../../styles"
import { isMobile } from "react-device-detect"
// TODO: need rewrite this module like class

export const minHeightCanvas = {
  mobile: 760,
  tablet: 1024,
}

export const drawSetting = {
  x0: 0,
  y0: 0,
  rx: 0,
  ry: 0,
}

export const getRY = rx => rx / 1.76

const calcDotCoordinate = (sizeX, sizeY, position) => {
  const t = Math.tan(
    (position * Math.PI) / 4 + Math.atan((2 * sizeY) / sizeX) / 2
  )
  const val = !(position > 1) ? 1 : 2

  const cx = sizeX * ((1 - t ** 2) / (val + t ** 2))
  const cy = (sizeY * 2 * t) / (1 + t ** 2)

  return [cx, cy]
}

const getDotCord = ellipse => {
  if (!ellipse?.dots) return null

  const { sizeX, dots } = ellipse
  const sizeY = getRY(sizeX)

  return dots.map(dot => {
    const [cx, cy] = calcDotCoordinate(sizeX, sizeY, dot.position)

    return {
      ...dot,
      x: drawSetting.x0 + cx / 2 - 18,
      y: drawSetting.y0 + cy / 2 - 18,
    }
  })
}

export const getDots = () => {
  return ellipsis.flatMap(ellipse => getDotCord(ellipse)).filter(el => el)
}

export const getCenterOfEllipsis = (windowSizes, isBannerShow) => {
  let centerOfEllipsis = {}

  if (windowSizes.width > size.laptop) {
    centerOfEllipsis = {
      y0: windowSizes.height / 2 + 85,
      x0: windowSizes.width / 2 + 245,
    }
  } else if (windowSizes.width === size.laptop) {
    centerOfEllipsis = {
      y0: windowSizes.height / 2 + 285,
      x0: windowSizes.width / 2,
    }
  } else {
    centerOfEllipsis = {
      y0: windowSizes.height - 100,
      x0: windowSizes.width / 2 - 55,
    }
  }

  return isBannerShow
    ? { ...centerOfEllipsis, y0: centerOfEllipsis.y0 - 80 }
    : centerOfEllipsis
}

// export const getCanvasSizes = windowSize => {
//   const isMobile = isMobile()
//   if (isMobile && windowSize.height < minHeightCanvas.mobile) {
//     return {
//       ...windowSize,
//       height: minHeightCanvas.mobile,
//     }
//   } else {
//     return windowSize
//   }
// }
