import React, { useEffect, useContext, useRef, useState } from "react"
import { MainContext } from "../store/main/contexts"
import _get from "lodash/get"
import { useInView } from "react-intersection-observer"
import styled, { css } from "styled-components"

export const HeaderColorChangeHandler = React.memo(
  ({
    backgroundColorBeforeHit,
    contentColorBeforeHit,
    logoColorBeforeHit,
    backgroundColorAfterHit,
    contentColorAfterHit,
    logoColorAfterHit,
    topRange = 200,
    bottomRange = 200,
  }) => {
    const { ref, inView, entry } = useInView({
      threshold: 0,
    })

    const { dispatch } = useContext(MainContext)

    const [styleBeforeHit, setStyleBeforeHit] = useState(true)
    const [allowChanges, setAllowChanges] = useState(false)

    useEffect(() => {
      updateScrollPosition()
    }, [entry, inView])

    const updateScrollPosition = e => {
      if (!allowChanges && window.pageYOffset > 0) {
        setAllowChanges(true)
      }

      const diff = _get(entry, ["boundingClientRect", "y"])
      if (diff >= 0 && diff < topRange) {
        setStyleBeforeHit(true)
      } else if (diff < 0 && diff > -bottomRange) {
        setStyleBeforeHit(false)
      }
    }

    useEffect(() => {
      if (!allowChanges) {
        return
      }

      if (styleBeforeHit) {
        dispatch({
          type: "SET_HEADER_COLORS",
          payload: {
            backgroundColor: backgroundColorBeforeHit,
            contentColor: contentColorBeforeHit,
            logoColor: logoColorBeforeHit,
          },
        })
      } else {
        dispatch({
          type: "SET_HEADER_COLORS",
          payload: {
            backgroundColor: backgroundColorAfterHit,
            contentColor: contentColorAfterHit,
            logoColor: logoColorAfterHit,
          },
        })
      }
    }, [styleBeforeHit])

    return (
      <div
        ref={ref}
        css={css`
          overflow: hidden;
          height: 0px;
        `}
      >
        &nbsp;
      </div>
    )
  },
  (prev, next) =>
    prev.topRange === next.topRange && prev.bottomRange === next.bottomRange
)
