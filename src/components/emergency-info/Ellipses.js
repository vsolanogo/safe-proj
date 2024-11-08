import React, { useEffect, useRef, useState, useMemo } from "react"
import styled, { css, keyframes } from "styled-components"

const SWrapper = styled.div`
  background-color: transparent;
  font-family: sans-serif;
  height: 500px;
  left: 0;
  top: 0;
  overflow: visible;
  position: absolute;
  text-align: center;
  width: 100vw;
  z-index: 10;
`

const SCanvas = styled.canvas`
  z-index: 80;
  background-color: transparent;
  left: 0;
  position: absolute;
  top: 0;
  overflow: visible;
`

const arr = [
  446, 580, 688, 826, 980, 1132, 1296, 1476, 1676, 1854, 2070, 2258, 2446, 2634,
  2822, 3010, 3200, 3388, 3580, 3774,
]

const linecolor = "#49e2c0"

export const Ellipses = ({ width, height }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    drawCanvasElipses()

    window.addEventListener("resize", drawCanvasElipses, false)

    return () => {
      window.removeEventListener("resize", drawCanvasElipses)
    }
  }, [width])

  const drawCanvasElipses = () => {
    canvasRef.current.style.left = 0
    canvasRef.current.style.top = 0

    const ctx = canvasRef.current.getContext("2d")

    let width = window.innerWidth

    canvasRef.current.width = width
    canvasRef.current.height = height * 2

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      arr.forEach(i => {
        ctx.strokeStyle = linecolor
        ctx.beginPath()
        ctx.arc(
          window.innerWidth / 2 + (window.innerWidth / 2) * 0.6,
          height / 2,
          i / 2,
          0,
          2 * Math.PI
        )

        ctx.stroke()
        ctx.lineWidth = 1
      })
    }

    draw()
  }

  return (
    <SWrapper>
      <SCanvas ref={canvasRef} />
    </SWrapper>
  )
}
