module.exports = {
  siteMetadata: {
    title: "Drew Olsen Portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Drew Olsen`,
        short_name: `DrewOlsen`,
        start_url: `/`,
        background_color: `#2f2b41`,
        theme_color: `#fd4d52`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11075037-4",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
