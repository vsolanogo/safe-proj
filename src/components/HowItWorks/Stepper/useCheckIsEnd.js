import { useState, useEffect } from "react"
import { useViewportScroll } from "framer-motion"

export const useCheckIsEnd = (height, startScrollY) => {
  const { scrollY } = useViewportScroll()
  const [isEnd, setEnd] = useState(false)

  useEffect(() => {
    scrollY.onChange(val => {
      if (val >= startScrollY + height) {
        !isEnd && setEnd(true)

        return height
      }
    })

    return () => {
      scrollY.destroy()
    }
  }, [scrollY, startScrollY])

  return isEnd
}
