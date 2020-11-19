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
      // The filesystem source plugin lets you query data about files
      //Querying from source files using the plugin gatsby-source-filesystem. It is a source plugin.
      //The plugin allows you to bring data into Gatsby's data system and then use queries at the bottom
      //of pages to use the data.
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
