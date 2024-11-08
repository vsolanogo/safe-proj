export const isSafari = () => {
  if (typeof window !== "undefined") {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  }
}