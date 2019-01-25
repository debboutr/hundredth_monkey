module.exports = {
  siteMetadata: {
    title: `the hundredth monkey`,
    author: `ken keyes, jr.`
  },
  pathPrefix: "/hundredth_monkey",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Permanent Marker`,
          `Righteous`,
          'Londrina Outline',
          'Gentium Book Basic',
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}