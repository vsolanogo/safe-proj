import React from "react"

import { ContentIcon } from "./ContentIcon"
import ShieldCheck from "../../../../assets/svg/shield-check.inline.svg"
import { useCheckIsEnd } from "../useCheckIsEnd"

export const EndedStep = ({ height, startScrollY }) => {
  const isEnd = useCheckIsEnd(height, startScrollY)

  return isEnd && <ContentIcon position={height - 37} icon={ShieldCheck} />
}
