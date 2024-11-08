/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const isBuild = process.argv.includes("build")

module.exports = {
  flags: {
    DEV_SSR: false,
  },

  siteMetadata: {
    title: `Sosafe`,
    description: `Sosafe`,
    author: `Sosafe`,
    siteUrl: `https://sosafe.se`,
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
      resolve: `gatsby-source-wordpress`,
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: `sosafe.se`,
        protocol: `https`,
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: ["**/faq_posts", "**/pages"],
      },
    },

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/translations`,
        languages: [`en`, `sv`],
        defaultLanguage: `sv`,
        // redirect: true,
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              subsets: [`latin`],
              variants: [`100`, `300`, `400`, `500`, `600`, `700`, `900`],
              strategy: "selfHosted",
              fontDisplay: `swap`,
            },
            {
              family: `Inter`,
              variants: [`400`, `500`, `600`, `700`, `800`],
              subsets: [`latin`],
              strategy: "selfHosted",
              fontDisplay: `swap`,
            },
          ],
        },
        useMinify: true,
        usePreload: false,
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

    // `gatsby-plugin-remove-serviceworker`,
    // `gatsby-plugin-no-sourcemaps`,

    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `wa.html`,
        openAnalyzer: true,
      },
    },
  ].filter(Boolean),
}
