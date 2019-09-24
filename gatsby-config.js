module.exports = {
  siteMetadata: {
    title: `Minimal Gatsby Starter Template for a Landingpage with TailwindCSS`,
    description: `Perfect Gatsby Starter Template if you intend to built a minimal landingpage with TailwindCSS support.`,
    author: `@nextlevelsh_it`,
    authorEmail: `mail@dailysh.it`,
    authorName: `Michael Czechowski`,
    authorPhone: `Can be requested by email`,
    authorProfession: `Designer, Consultant and Philosopher`,
    authorInfo: `Michael Czechowski · Designer, Consultant and Philosopher · Stuttgart (Germany)`,
    authorProfiles: [
      {
        text: `mail@dailysh.it`,
        link: `mailto:mail@dailysh.it`,
        indicator: `email`
      },
      {
        text: `@nextlevelsh_it`,
        link: `https://twitter.com/nextlevelsh_it`,
        indicator: `twitter`
      }
    ],
    authorFullAdress: [
      `Michael Czechowski`,
      `Schlosserstr. 33`,
      `70180 Stuttgart`,
      `Germany`
    ],
    displayTitle: `Uno 1.0`,
    displaySubtitle: `GatsbyJS Starter Template`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
          require('autoprefixer')
        ]
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',
        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    },
    `gatsby-plugin-react-image-map`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-uno`,
        short_name: `uno`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
