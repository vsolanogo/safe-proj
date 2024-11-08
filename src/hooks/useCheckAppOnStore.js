import { useState, useCallback, useEffect } from "react"

import { setCheckApp, getCheckApp, checkIsMobile } from "../utils"
import { useWindowSize } from "./useWindowSize"
import { size } from "../styles"
import { isMobile } from "react-device-detect"

export const useCheckAppOnStore = () => {
  const [isCheck, setCheck] = useState(!!getCheckApp())
  const { width } = useWindowSize()

  const isNeededMobile = width < size.tablet && isMobile

  const checkAppOnStore = useCallback(() => {
    setCheck()
    setCheckApp()
  }, [setCheck])

  const toggleCheckAppOnStore = useCallback(() => {
    setCheck(prevVal => !prevVal)
  }, [setCheck])

  useEffect(() => {
    if (isNeededMobile && !isCheck) {
      setCheck(true)
    }
    if (!isNeededMobile && isCheck) {
      setCheck(false)
    }
  }, [width])

  return [isCheck, checkAppOnStore, toggleCheckAppOnStore]
}
