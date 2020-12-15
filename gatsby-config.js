module.exports = {
  siteMetadata: {
    title: `Simone Paccamonti`,
    description: `Simone Paccamonti Bar Manager e Bartender`,
    author: `@DFM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Indie Flower`,
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'it'
      }
    }
  ],
}
