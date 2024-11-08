let supportsPassive = false

try {
  typeof window !== "undefined" &&
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true
        },
      })
    )
} catch (e) {
  console.error("scroll", e)
}

const wheelOpt = supportsPassive ? { passive: false } : false

export const handleScroll = cb => {
  typeof window !== "undefined" &&
    window.addEventListener("DOMMouseScroll", cb, false) // older FF
  typeof window !== "undefined" &&
    window.addEventListener("wheel", cb, wheelOpt) // modern desktop
  typeof window !== "undefined" && window.addEventListener("touchmove", cb) // mobile
}

export const removeHandleScroll = cb => {
  typeof window !== "undefined" &&
    window.removeEventListener("DOMMouseScroll", cb, false)
  typeof window !== "undefined" &&
    window.removeEventListener("wheel", cb, wheelOpt)
  typeof window !== "undefined" && window.removeEventListener("touchmove", cb)
}

export const scrollToTop = () => {
  if (typeof window !== "undefined" && window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export const scrollTo = (el, offset) => {
  const rect = el?.getBoundingClientRect()

  if (typeof window !== "undefined") {
    const top = rect.top - offset

    if (top > window.pageYOffset) {
      window.scrollTo({
        top,
        behavior: "smooth",
      })
    }
  }
}

// get time in a seconds
// get height in a px
export const getTime = (height, time, allHeight) => {
  const convertedTime = {}
  let pxInMs = allHeight / (time * 100) // how many px contain in one ms
  let ms = Math.round(height / pxInMs)

  convertedTime.ms = ms % 100
  convertedTime.s = ((ms - convertedTime.ms) / 100) % 60
  convertedTime.m = ((ms - convertedTime.ms) / 100 - convertedTime.s) / 60

  return convertedTime
}

export const getPosition = (time, allTime, allHeight) => {
  const { m, s, ms } = time
  const timeInMs = m * 60 * 100 + s * 100 + ms
  let pxInMs = allHeight / (allTime * 100) // how many px contain in one ms
  let position = Math.round(timeInMs * pxInMs)

  return position
}

export const formatNumber = num => (num <= 9 ? `0${num}` : `${num}`)
