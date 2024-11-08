import Layout from "./wrapPageElement"
import { getShowedSplash } from "./src/utils"

export const shouldUpdateScroll = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual"
  }

  window.scrollTo(0, 0)
  return false
}

export const wrapPageElement = Layout

export const onRouteUpdate = ({ location, prevLocation }) => {
  try {
    if (!!getShowedSplash()) {
      const n = document.getElementById("splashComponentImportant")
      n.style.display = "none"
    }
  } catch {}
}
