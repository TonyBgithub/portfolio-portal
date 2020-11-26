module.exports = {
  siteMetadata: {
    title: 'TBCodelab Documentation Portal',
    description: 'A documentation portal built with Gatsby',
    author: 'Tony Briget',
    ogImage: 'https://ibb.co/tMVYCHq',
    url: 'https://tb-documentation-portal.netlify.app/',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      //source plugin
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
     }, //add github-like hoverable anchors
 //transformer plugins transform raw content brought by source plugins.
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/img/onlylogo.png` //Path relative to the root of the site
      }
    }
  ],
}
