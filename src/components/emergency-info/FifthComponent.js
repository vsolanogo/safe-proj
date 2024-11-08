import React from "react"
import {
  SharedDottedListUl,
  SharedDottedListLi,
  SharedDottedListULDot,
  SharedDottedListULVerticalLine,
} from "../shared"
import { StaticImage } from "gatsby-plugin-image"
import audioWaveVideo from "../../assets/videos/sound.mp4"
import i1svg from "../../assets/svg/battery3.svg"
import i3svg from "../../assets/svg/pause.svg"
import i4svg from "../../assets/svg/live.svg"
import i5svg from "../../assets/svg/alarm.svg"
import styled, { css, keyframes } from "styled-components"
import PulsingLottiejson from "../../assets/animations/pulsing.json"
import { useInView } from "react-intersection-observer"

const SText = styled.p`
  color: #333;
  font-family: Inter;
  font-size: 14px;
  margin: 0;
`

export const TextInter = styled.p`
  color: #101010;
  cursor: default;
  font-family: "Inter", Arial, sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: initial;
`

const SBox = styled.div`
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  padding: 8px 12px;
  @media (max-width: 640px) {
    width: 95%;
  }
`

const QuestionHighliught = styled.div`
  background-color: #e4e4e4;
  border-radius: 0.7em;
  bottom: calc(100% - 3em);
  box-shadow: 27.9663px 38.8421px 77.6841px rgba(0, 0, 0, 0.1);
  filter: opacity(0);
  left: calc(100% + 1.5em);
  padding: 1.3em 1.5em 1.3em 2.2em;
  position: absolute;
  transition: filter 0.2s;
  visibility: hidden;
  width: 28em;
  max-width: 21vw;
  line-height: 1.5;

  h3 {
    font-weight: 600;
    margin: 0 0 0.5em 0;
  }
`

const QuestionHighliughtAngle = styled.div`
  border-color: transparent #e4e4e4 transparent transparent;
  border-style: solid;
  border-width: 20px 20px 20px 0;
  bottom: 6px;
  height: 0;
  left: -9px;
  position: absolute;
  width: 0;
`

const QuestionNav = styled.div`
  align-items: center;
  background-color: #e4e4e4;
  border-radius: 100%;
  display: flex;
  height: 2.5em;
  justify-content: center;
  position: absolute;
  right: -1em;
  top: -0.3em;
  width: 2.5em;
  z-index: 100;
  cursor: pointer;

  > p {
    margin: 0;
    font-family: "Inter", Arial, sans-serif;
    color: #000;
    font-size: 1.48em;
  }
  :hover {
    background-color: var(--cyan-color);

    ${QuestionHighliught} {
      visibility: visible;
      filter: opacity(1);
      background-color: var(--cyan-color);
    }

    ${QuestionHighliughtAngle} {
      border-color: transparent var(--cyan-color) transparent transparent;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

const SCanvas = styled.canvas`
  background-color: transparent;
  overflow: visible;
  z-index: 10;
  position: absolute;
  left: 30.991%;
  top: 40.679%;
  transform: translateX(-50%) translateY(-50%);
`

const SCanvasWrapper = styled.div`
  background-color: transparent;
  overflow: visible;
  z-index: 10;
  position: absolute;
  left: 19.691%;
  top: 41.101%;
  transform: translateX(-50%) translateY(-50%);
  filter: opacity(0.5);
`

const pulseMaxWidth = 150

const STimeText = styled.p`
  cursor: default;
  font-family: "Inter", Arial, sans-serif;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: initial;
  color: #333;
  font-size: 0.9em;
  font-weight: 400;
  position: absolute;
  right: calc(100% + 1.2em);
`

const SLocationText = styled.p`
  color: #101010;
  cursor: default;
  font-family: "Inter", Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: initial;
  color: #333;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 641px) {
    min-width: 21em;
  }
`

export const PulsatingEllipse = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    <SCanvasWrapper ref={ref} id="qweqweqwe">
      {/* <Lottie
        options={{
          animationData: PulsingLottiejson,
          renderer: "canvas",
          autoplay: false,
        }}
        autoplay={false}
        width={70}
        height={70}
        isPaused={!inView}
      /> */}
    </SCanvasWrapper>
  )
}

export const FifthComponent = () => {
  return (
    <div
      css={`
        position: relative;
        display: flex;
      `}
    >
      <div
        css={`
          width: 100vw;
          position: absolute !important;
          z-index: -1;
        `}
      >
        <StaticImage
          src="../../assets/images/emergency/map2.png"
          placeholder="none"
          layout="fullWidth"
          objectFit="contain"
          formats={["png"]}
          quality={70}
          breakpoints={[300, 500, 900, 1368, 1920]}
        />

        <div
          css={`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 110%;
            overflow: visible;
            z-index: 24;
          `}
        >
          <StaticImage
            src="../../assets/images/emergency/coverGradient.png"
            placeholder="none"
            layout="fullWidth"
            objectFit="contain"
            formats={["png"]}
            quality={70}
            breakpoints={[200]}
          />
        </div>

        <div
          css={`
            z-index: 20;
            position: absolute;
            width: 10%;
            left: 14%;
            top: 30.5%;
          `}
        >
          <StaticImage
            src="../../assets/images/emergency/pathCover.png"
            placeholder="none"
            layout="fullWidth"
            objectFit="contain"
            formats={["png"]}
            quality={70}
            breakpoints={[300, 400, 500]}
          />
        </div>

        {/* <PulsatingShape /> */}

        <PulsatingEllipse />
      </div>

      <div
        css={`
          max-width: 35em;
          width: 100%;
          margin: auto;
          padding: 0 2em;
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: 5px;
          position: relative;

          > div {
            box-shadow: 27.9663px 38.8421px 77.6841px rgba(0, 0, 0, 0.1);
            transform: translateY(-4.5em);
          }
        `}
      >
        <div
          css={`
            border: 1px solid #f10710;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            background: #fff1f1;
            padding: 15px 15px 22px 15px;
            align-items: center;
            position: relative;
          `}
        >
          <QuestionNav>
            <p>?</p>

            <QuestionHighliught>
              <h3>Alarmstatus</h3>
              Här ser du tidpunkt för när alarmet aktiverades och om alarmet är
              pågående eller avslutat.
              <QuestionHighliughtAngle />
            </QuestionHighliught>
          </QuestionNav>

          <img
            src={i5svg}
            css={`
              max-width: 24px;
            `}
          />
          <p
            css={`
              color: #f10710;
              font-size: 1.3em;
              font-weight: 400;
              margin: 0.65em 0 0.8em 0;
              text-align: center;
            `}
          >
            Alice Johansson är i en nödsituation!
          </p>

          <div
            css={`
              display: grid;
              grid-template-columns: 10fr 4fr;
              grid-column-gap: 1.7em;

              > div {
                display: flex;
                flex-direction: column;
              }

              p {
                text-align: center;
              }

              @media (max-width: 640px) {
                width: 95%;
              }
            `}
          >
            <div>
              <SText
                css={`
                  color: #101010;
                  font-weight: 400;
                `}
              >
                Alarm aktiverat
              </SText>
              <SText
                css={`
                  font-weight: 500;
                  color: #f10710;
                `}
              >
                24 aug 2020 14:00:34
              </SText>
            </div>
            <div>
              <SText
                css={`
                  color: #101010;
                  font-weight: 400;
                `}
              >
                Status
              </SText>
              <SText
                css={`
                  font-weight: 500;
                  color: #f10710;
                `}
              >
                Pågående
              </SText>
            </div>
          </div>
        </div>

        <div
          css={`
            background: #fff;
            border-radius: 0.65em;
            display: flex;
            flex-direction: column;
            z-index: 10;
            padding: 1em;
            position: relative;
          `}
        >
          <QuestionNav>
            <p>?</p>

            <QuestionHighliught>
              <h3>Allmän info</h3>
              Här ser du namnet på personen i nöd, dennes nuvarande batterinivå
              och position samt telefonnummer. Tryck på <b>ring</b> eller{" "}
              <b>navigera till</b> för att snabbt komma i kontakt med eller
              navigera till personen.
              <QuestionHighliughtAngle />
            </QuestionHighliught>
          </QuestionNav>

          <div
            css={`
              display: flex;
              align-items: center;
            `}
          >
            <div
              css={`
                img,
                > div {
                  border-radius: 100%;
                  max-width: 4em;
                  max-height: 4em;
                  margin-right: 1em;
                }
              `}
            >
              <StaticImage
                src="../../assets/images/emergency/Alice.png"
                placeholder="none"
                layout="fixed"
                width={100}
                objectFit="contain"
                formats={["png"]}
                quality={70}
              />
            </div>

            <div
              css={`
                display: flex;
                flex-direction: column;
                position: relative;
              `}
            >
              <TextInter
                css={`
                  font-weight: 500;
                  font-size: 1.22em;
                `}
              >
                Alice Johansson
              </TextInter>
              <TextInter
                css={`
                  color: #818c99;
                  margin-top: 0.4em;
                  font-size: 1em;
                `}
              >
                Nuvarande batterinivå:
              </TextInter>
              <div
                css={`
                  position: absolute;
                  top: 60%;
                  left: calc(100% + 0.5em);
                  display: flex;
                `}
              >
                <img
                  src={i1svg}
                  css={`
                    max-width: 1.4em;
                    margin-right: 0.3em;
                  `}
                />
                <TextInter
                  css={`
                    font-weight: 600;
                    font-size: 1em;
                    color: #f10710;
                  `}
                >
                  7%
                </TextInter>
              </div>
            </div>
          </div>

          <div
            css={`
              display: grid;
              margin-top: 0.8em;
              grid-template-columns: 9fr 10fr;
              grid-column-gap: 0.2em;
              position: relative;
            `}
          >
            <div
              css={`
                display: flex;
                flex-direction: column;
                margin-right: 0.8em;
              `}
            >
              <TextInter
                css={`
                  color: var(--blue-color);
                  font-size: 1em;
                  line-height: 1.4;
                  font-weight: 500;
                `}
              >
                Nuvarande position
              </TextInter>
              <TextInter
                css={`
                  color: #818c99;
                  font-size: 0.85em;
                  line-height: 1.4;
                `}
              >
                Uppdaterad för 7 sek sedan
              </TextInter>

              <TextInter
                css={`
                  color: #818c99;
                  font-size: 0.85em;
                  line-height: 1.4;
                  margin-top: 0.3em;
                `}
              >
                84°17'14.0363"N
                <br /> 042°14'52.4473E
              </TextInter>
            </div>
            <div>
              <TextInter
                css={`
                  color: #333;
                  font-size: 1em;
                  font-weight: 400;
                  line-height: 1.4;
                `}
              >
                Torsgatan 10, 111 23 Stockholm
              </TextInter>

              <a
                css={`
                  font-family: Roboto;
                  font-size: 1em;
                  text-decoration: underline;
                  color: var(--blue-color);
                  padding-top: 0.33em;
                `}
                href="/emergency-info/"
              >
                Navigera till
              </a>
            </div>
          </div>

          <div
            css={`
              border-top: 1px solid #e4e4e4;
              margin: 1em 0;
            `}
          ></div>

          <div
            css={`
              display: grid;
              grid-template-columns: 9fr 10fr;
              grid-column-gap: 0.2em;
            `}
          >
            <TextInter
              css={`
                color: var(--blue-color);
                font-size: 1em;
                line-height: 1.4;
                font-weight: 500;
              `}
            >
              Telefonnummer
            </TextInter>

            <div
              css={`
                display: flex;
              `}
            >
              <TextInter
                css={`
                  color: #333;
                  font-size: 1em;
                  font-weight: 400;
                  max-width: 13em;
                  line-height: 1.4;
                  margin: 0 0.5em 0 0em;
                `}
              >
                073 976 7577
              </TextInter>

              <TextInter
                css={`
                  color: var(--blue-color);
                  font-size: 1em;
                  line-height: 1.4;
                  font-weight: 400;
                  text-decoration: underline;
                `}
                as="a"
                href="tel:+46959595953"
              >
                Ring
              </TextInter>
            </div>
          </div>
        </div>

        <div
          css={`
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            background: #fff;
            padding: 21px 12px 5px 21px;
            z-index: 20;
            position: relative;
          `}
        >
          <QuestionNav>
            <p>?</p>

            <QuestionHighliught>
              <h3>Ljudström</h3>
              Här kan du höra vad som pågår i, för att snabbt kunna bedömma
              situationen. Ljudet från händelsen lagras i molnet och personen
              som aktiverat alarmet kan granska, dela och radera händelsen
              <QuestionHighliughtAngle />
            </QuestionHighliught>
          </QuestionNav>

          <div
            css={`
              display: flex;
              justify-content: space-between;
            `}
          >
            <TextInter
              css={`
                font-weight: 700;
                font-size: 1em;
              `}
            >
              Ljud
            </TextInter>
            <img
              src={i4svg}
              css={`
                max-height: 1.3em;
                margin-right: 0.5em;
              `}
            />
          </div>
          <div
            css={`
              display: grid;
              grid-template-columns: 1.4em 1fr;
              grid-column-gap: 0.4em;
              height: 4em;
            `}
          >
            <img
              src={i3svg}
              css={`
                max-width: 1.4em;
                align-self: center;
              `}
            />
            <div
              css={css`
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
              `}
            >
              <video
                preload="auto"
                autoPlay
                loop
                muted
                css={`
                  box-shadow: inset 0px 0px 11px 4px #ffffff;
                  outline: none;
                  max-width: 26em;
                  position: absolute;
                  width: 100%;
                  transform: scale(1.2);
                  @media (min-width: 640px) {
                    transform: scale(1.15) translateY(-0.01em);
                  }
                `}
              >
                <source src={audioWaveVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div
          css={`
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            background: #fff;
            padding: 21px 12px 5px 21px;
            z-index: 20;
            position: relative;
          `}
        >
          <QuestionNav
            css={`
              top: 0;
            `}
          >
            <p>?</p>

            <QuestionHighliught>
              <h3>Platshistorik</h3>
              Här ser du var personen som har aktiverat alarmet befinner sig men
              även var den varit och vart den är påväg.
              <QuestionHighliughtAngle />
            </QuestionHighliught>
          </QuestionNav>

          <TextInter
            css={`
              font-weight: 700;
              font-size: 1em;
            `}
          >
            Platshistorik
          </TextInter>

          <SharedDottedListUl
            css={css`
              margin-left: 3.3em;
              margin-top: 1.4em;
            `}
          >
            <SharedDottedListLi>
              <SharedDottedListULDot />
              <SharedDottedListULVerticalLine isFirst />
              <SBox>
                <STimeText>11:24</STimeText>

                <SLocationText>Torsgatan 10, 111 23 Stockholm</SLocationText>

                <div
                  css={`
                    display: flex;
                    margin-top: 0.2em;
                  `}
                >
                  <img
                    src={i1svg}
                    css={`
                      max-width: 1.4em;
                      margin-right: 0.3em;
                    `}
                  />

                  <TextInter
                    css={`
                      color: #f10710;
                      font-size: 0.9em;
                      font-weight: 600;
                      line-height: 1.4;
                    `}
                  >
                    7%
                  </TextInter>
                </div>
              </SBox>
            </SharedDottedListLi>

            <SharedDottedListLi>
              <SharedDottedListULDot />
              <SharedDottedListULVerticalLine />
              <SBox>
                <STimeText>11:13</STimeText>

                <SLocationText>
                  Kammakargatan 52, 111 24 Stockholm
                </SLocationText>
              </SBox>
            </SharedDottedListLi>

            <SharedDottedListLi>
              <SharedDottedListULDot />
              <SharedDottedListULVerticalLine />
              <SBox>
                <STimeText>11:07</STimeText>

                <SLocationText>
                  Kammakargatan 53, 111 24 Stockholm
                </SLocationText>
              </SBox>
            </SharedDottedListLi>

            <SharedDottedListLi>
              <SharedDottedListULDot />
              <SharedDottedListULVerticalLine isLast />
              <SBox>
                <STimeText>11:00</STimeText>

                <SLocationText>
                  Kammakargatan 73, 111 24 Stockholm
                </SLocationText>
              </SBox>
            </SharedDottedListLi>
          </SharedDottedListUl>
        </div>
      </div>
    </div>
  )
}
