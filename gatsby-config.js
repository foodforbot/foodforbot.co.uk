module.exports = {
  siteMetadata: {
    title: `foodforbot`,
    description: `We build websites for the food & drink industry.`,
    author: `@ramsayshiells`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `foodforbot`,
        short_name: `foodforbot`,
        start_url: `/`,
        background_color: `#0AD2FE`,
        theme_color: `#0AD2FE`,
        display: `minimal-ui`,
        icon: `src/images/foodforbot_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161440347-1",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `87es4c76nrn9`,
        accessToken: `ZYc24RjL3SUQENhi-kp2BI0MtuagaTe6EgimAeMGAek`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
