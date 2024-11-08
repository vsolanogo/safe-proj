import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

import { defaultMetaInfo, navbarLinks } from "../config"

export const SEO = () => {
  const { pathname } = useLocation()

  const title = useMemo(
    () =>
      Object.values(navbarLinks).find(({ path }) => path === pathname)?.name,
    [pathname]
  )

  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        data-react-helmet="true"
      />
      <title>
        {title ? `${defaultMetaInfo.title} | ${title} ` : defaultMetaInfo.title}
      </title>
    </Helmet>
  )
}
