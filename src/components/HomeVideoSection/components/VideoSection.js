import React from "react"
import styled from "styled-components"
import BgVideoMp4 from "../../../assets/videos/bg-video.mp4"
import BgVideoWebM from "../../../assets/videos/bg-video.webm"

const StyledVideo = styled.video`
  width: 100%;
`
export const VideoSection = () => {
  return (
    <StyledVideo preload="auto" autoPlay loop muted playsinline>
      <source src={BgVideoMp4} type="video/mp4" />
      <source src={BgVideoWebM} type="video/webm" />
      Your browser does not support HTML video.
    </StyledVideo>
  )
}
