export const getSelected = (path, locale, pathname) => {
  const withoutLocale = pathname.replace(`/${locale}`, "")
  if (withoutLocale.length === 1) {
    return withoutLocale === path
  }
  return withoutLocale.replace(/\/$/, "") === path
}