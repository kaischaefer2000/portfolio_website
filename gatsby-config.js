module.exports = {
  siteMetadata: {
    title: `Kai Schäfer | Web-Developer`,
    description: `Hi, ich bin Kai. Ich bin leidenschaftlicher Web-Entwickler und Freelancer. Schau dir gerne mal mein Portfolio an und komme mit mir in Kontakt :)`,
    author: `Kai Schäfer`,
    siteUrl: `https://kaischaefer.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
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
        name: `kai-schaefer`,
        short_name: `Kai Schäfer`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kai_favicon.png`,
      },
    },
  ],
}
