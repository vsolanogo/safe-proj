export const getPageTop = el => {
  if (typeof window !== "undefined" && el) {
    const rect = el.getBoundingClientRect()
    var docEl = document.documentElement

    return rect.top + (window.pageYOffset || docEl.scrollTop || 0)
  }
}
