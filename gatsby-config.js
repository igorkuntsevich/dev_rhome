/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Студия дизайна интерьера`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 89,
          breakpoints: [500, 1200, 1800],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-rhome`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svg/rhome-favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          selfHosted: [
            {
              family: "Gilroy",
              urls: {
                woff2: `/src/fonts/Gilroy-Light.woff2`,
                woff: `/src/fonts/Gilroy-Light.woff`,
              },
              fontStyle: "normal",
              fontWeight: 300,
            },
            {
              family: "Gilroy",
              urls: {
                woff2: `/src/fonts/Gilroy-Regular.woff2`,
                woff: `/src/fonts/Gilroy-Regular.woff`,
              },
              fontStyle: "normal",
              fontWeight: 400,
            },
            {
              family: "Gilroy",
              urls: {
                woff2: `/src/fonts/Gilroy-RegularItalic.woff2`,
                woff: `/src/fonts/Gilroy-RegularItalic.woff`,
              },
              fontStyle: "italic",
              fontWeight: 400,
            },
            {
              family: "Gilroy",
              urls: {
                woff2: `/src/fonts/Gilroy-Medium.woff2`,
                woff: `/src/fonts/Gilroy-Medium.woff`,
              },
              fontStyle: "normal",
              fontWeight: 500,
            },
            {
              family: "Gilroy",
              urls: {
                woff2: `/src/fonts/Gilroy-Bold.woff2`,
                woff: `/src/fonts/Gilroy-Bold.woff`,
              },
              fontStyle: "normal",
              fontWeight: 700,
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N7KKZ36",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 62048629,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/indexes/pages`,
    //     ignore: [`blog.(js|ts)?(x)`],
    //   },
    // },
  ],
}
