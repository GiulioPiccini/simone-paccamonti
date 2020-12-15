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
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'it'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Indie Flower`,
        ],
        display: 'swap'
      }
    }
  ],
}
