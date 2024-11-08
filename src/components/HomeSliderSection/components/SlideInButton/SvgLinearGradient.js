import React, { useEffect, useState } from "react"
import * as types from "prop-types"
import { isSafari } from "../../../../utils"

export const SvgLinearGradient = ({ id, stopColor1, stopColor2 }) => {
  const [transformValue, setTransformValue] = useState("rotate(0)")
  const [offsetValue, setOffsetValue] = useState("40%")

  useEffect(() => {
    setTransformValue(isSafari() ? "rotate(90)" : "rotate(0)")
    setOffsetValue(isSafari() ? "50%" : "40%")
  }, [])

  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        <stop offset={offsetValue} stopColor={stopColor1} stopOpacity="1"/>
        <stop offset="80%" stopColor={stopColor2} stopOpacity="1"/>
      </linearGradient>
    </defs>
  )
}

SvgLinearGradient.propTypes = {
  id: types.string.isRequired,
  stopColor1: types.string.isRequired,
  stopColor2: types.string.isRequired,
}