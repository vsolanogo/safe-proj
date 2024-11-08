import React, { useEffect } from "react"
import { Dot } from "./Dot"
import a1 from "../../../assets/images/hero-section/a1.svg"
import a2 from "../../../assets/images/hero-section/a2.svg"
import a3 from "../../../assets/images/hero-section/a3.svg"
import a4 from "../../../assets/images/hero-section/a4.svg"
import a5 from "../../../assets/images/hero-section/a5.svg"
import a6 from "../../../assets/images/hero-section/a6.svg"
import a7 from "../../../assets/images/hero-section/a7.svg"
import styled, { keyframes, css } from "styled-components"

const SImg = styled.img`
  width: 44px;
  height: 44px;
`

const Img5 = () => <SImg src={a5} />
const Img6 = () => <SImg src={a6} />
const Img7 = () => <SImg src={a7} />
const Img4 = () => <SImg src={a4} />
const Img3 = () => <SImg src={a3} />
const Img1 = () => <SImg src={a1} />
const Img2 = () => <SImg src={a2} />

export const Dots = ({ canvasIsDrawn, onDotHover }) => {
  return (
    <>
      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-49}
        y={-23}
        position={1.2}
        text={"home.section1.dot5.text"}
        title={"home.section1.dot5.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img5}
      />

      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-32}
        y={-19}
        position={1.2}
        text={"home.section1.dot6.text"}
        title={"home.section1.dot6.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img6}
      />

      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-21}
        y={-28}
        position={1.2}
        text={"home.section1.dot7.text"}
        title={"home.section1.dot7.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img7}
      />

      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-58}
        y={12}
        position={1.2}
        text={"home.section1.dot4.text"}
        title={"home.section1.dot4.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img4}
      />

      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-26}
        y={22}
        position={1.2}
        text={"home.section1.dot3.text"}
        title={"home.section1.dot3.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img3}
      />

      <Dot
        active={true}
        onDotHover={onDotHover}
        x={-25}
        y={12}
        position={1.2}
        text={"home.section1.dot1.text"}
        title={"home.section1.dot1.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img1}
      />

      <Dot
        active={false}
        onDotHover={onDotHover}
        x={-12}
        y={15}
        position={1.2}
        text={"home.section1.dot2.text"}
        title={"home.section1.dot2.title"}
        canvasIsDrawn={canvasIsDrawn}
        imgComponent={Img2}
      />
    </>
  )
}
