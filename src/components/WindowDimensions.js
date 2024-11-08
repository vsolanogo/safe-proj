import React, { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"

export const WindowDimensions = ({ render }) => {
  const [width, setWidth] = useState(650)
  const [height, setHeight] = useState(null)

  const [widthDebounced] = useDebounce(width, 360)
  const [heightDebounced] = useDebounce(height, 640)

  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      {render({
        width: widthDebounced,
        height: heightDebounced,
      })}
    </>
  )
}
