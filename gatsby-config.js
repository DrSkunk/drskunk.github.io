require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Sebastiaan Jansen`,
    // Default title of the page
    siteTitleAlt: `Portfolio of Sebastiaan Jansen - DrSkunk`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Portfolio of Sebastiaan Jansen - DrSkunk`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://sebastiaanjansen.be`,
    // Used for SEO
    siteDescription: `Portfolio of maker and developer Sebastiaan Jansen.`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@ikbensebastiaan`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        access_token: process.env.ACCESS_TOKEN,
        instagram_id: process.env.BUSINESS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio of Sebastiaan Jansen`,
        short_name: `Sebastiaan Jansen`,
        description: `Portfolio of maker and developer Sebastiaan Jansen.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
};
