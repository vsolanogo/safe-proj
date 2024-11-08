export const getUserAgent = () => {
  if (typeof window !== "undefined") {
    return navigator.userAgent || navigator.vendor || window.opera
  }
}
