module.exports = {
  siteMetadata: {
    title: "Drew Olsen Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "LyoNrkYTZAGzgpf6mPN8Wme4NAGAsgPDpfU0da6T0YA",
        spaceId: "ea9iqiy8sh3l",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11075037-4",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
