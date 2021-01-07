module.exports = {
  siteMetadata: {
    title: "zlomraj",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "UvA-FTQhAIRZNbYoQJfFmnbjcJB6fdQJGY6qhptEjzo",
        spaceId: "4fi4burl03xd",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-121910088-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-material-ui",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
};

