module.exports = {
  siteMetadata: {
    title: `Minimal Gatsby Starter Template for a Landingpage with TailwindCSS`,
    description: `Perfect Gatsby Starter Template if you intend to built a minimal landingpage with TailwindCSS support.`,
    author: `@nextlevelsh_it`,
    authorEmail: `mail@paulastoll.de`,
    authorName: `Paula Stoll`,
    authorProfession: `Documentary Director`,
    authorInfo: `Paula Stoll · Documentary director · Berlin (Germany)`,
    authorProfiles: [
      {
        text: `mail@paulastoll.com`,
        link: `mailto:mail@paulastoll.com`
      }
    ],
    authorFullAdress: [
      `Paula Stoll`,
      `Skalitzer Str. 6`,
      `10999 Berlin`,
      `Germany`
    ]
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
    {
      resolve: `gatsby-plugin-react-image-map`,
      options: {
        path: `${__dirname}/src/images/image-map`
      }
    },
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
