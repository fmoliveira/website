module.exports = {
  siteMetadata: {
    title: `fmoliveira.dev`,
    description: `I'm a Freelance Software Engineer who loves writing clean and well-tested code. My favourite tech stack at the moment is React, TypeScript, Jest and Testing Library. Always hungry for learning and happy to help!`,
    author: `@fmoliveira`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
        name: `fmoliveira.dev`,
        short_name: `fmoliveira`,
        start_url: `/`,
        background_color: `#20222e`,
        theme_color: `#20222e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
