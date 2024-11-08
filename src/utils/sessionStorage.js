const SHOWED_SPLASH = "showed-splash"
const CHECK_APP = "check-app"

export const setShowedSplash = () =>
  typeof window !== "undefined" &&
  window.localStorage.setItem(SHOWED_SPLASH, "showed")
export const getShowedSplash = () =>
  typeof window !== "undefined" && window.localStorage.getItem(SHOWED_SPLASH)

export const setCheckApp = () =>
  typeof window !== "undefined" &&
  window.sessionStorage.setItem(CHECK_APP, "check")

export const getCheckApp = () =>
  typeof window !== "undefined" && window.sessionStorage.getItem(CHECK_APP)
