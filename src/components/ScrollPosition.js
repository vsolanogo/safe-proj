import React, { useState, useEffect } from "react"

export const ScrollPosition = ({ render }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    updateScrollPosition()
    window.addEventListener("scroll", updateScrollPosition)

    return () => {
      window.removeEventListener("scroll", updateScrollPosition)
    }
  }, [])

  const updateScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  return (
    <>
      {render({
        scrollPosition,
      })}
    </>
  )
}
