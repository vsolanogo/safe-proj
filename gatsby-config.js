const isBuild = process.argv.includes("build")

module.exports = {
  flags: {
    DEV_SSR: false,
  },

  siteMetadata: {
    title: `Sosafe`,
    description: `Sosafe`,
    author: `Sosafe`,
    siteUrl: `https://google.com`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: ["/404"],
      },
    },

    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },

    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sosafe`,
        short_name: `Sosafe`,
        description: `Sosafe.`,
        lang: `en`,
        display: `standalone`,
        icon: `./src/assets/images/favicon.png`,
        start_url: `/`,
        cache_busting_mode: "none",

        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/translations`,
        languages: [`en`, `sv`],
        defaultLanguage: `en`,
        // redirect: true,
      },
    },

    isBuild && {
      resolve: `gatsby-plugin-optimize-svgs`,
    },

    isBuild && {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
        displayName: false,
        minify: true,
        pure: true,
      },
    },

    !isBuild && {
      resolve: `gatsby-plugin-styled-components`,
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ].filter(Boolean),
}
