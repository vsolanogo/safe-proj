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

// call this to Disable
export const disableScroll = cb => {
  typeof window !== "undefined" &&
    window.addEventListener("DOMMouseScroll", cb, false) // older FF
  typeof window !== "undefined" &&
    window.addEventListener("wheel", cb, wheelOpt) // modern desktop
  typeof window !== "undefined" &&
    window.addEventListener("touchmove", cb, wheelOpt) // mobile
}

// call this to Enable
export const enableScroll = cb => {
  typeof window !== "undefined" &&
    window.removeEventListener("DOMMouseScroll", cb, false)
  typeof window !== "undefined" &&
    window.removeEventListener("wheel", cb, wheelOpt)
  typeof window !== "undefined" &&
    window.removeEventListener("touchmove", cb, wheelOpt)
}
