// exports.onCreateNode = ({ node, getNode }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//       const fileNode = getNode(node.parent)
//       console.log(`\n`, fileNode.relativePath)
//     }
//   }
//***************UNCOMMENT BELOW TO GET THE SLUGS BACK***************

const path = require("path") //do not forget this as path is used later in createPage
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  /**
   * Add slug edge
   */
  let slug
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent) //*get the fileNode to construct path
    const parsedFilePath = path.parse(fileNode.relativePath) //*creates an object with the following properties: dir, root, base, name, ext
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") && //The first argument is an object who wants to borrow this function (here hasownproperty) followed by the list of arguments for that function.
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${node.frontmatter.slug}`; //if the slug is specified in the frontmatter of the markdown file, use it to create the slug as node field.
    console.log(parsedFilePath)
    } else {
      // if name of the file is not index, and the directory is not empty, assign the filename to slug.
      slug = `/${parsedFilePath.name}/`;
      console.log(parsedFilePath)
    }
    createNodeField({
      node,
      name: "slug",
      value: _.kebabCase(slug).toLowerCase(),
    })

    /**
     * Add permalink edge
     *
     * If the parsed fileNode directory has a value, use it and add the slug to create permalink
     * otherwise just use the slug as permalink.
     */

    let permalink;
    if (parsedFilePath.dir !== '') {
      permalink = `/${parsedFilePath.dir}${slug}`;
      console.log("permalink is " + permalink)
    } else {
      permalink = slug;
      console.log("permalink is " + permalink)
    }
    createNodeField({ node, name: "permalink", value: permalink.toLowerCase() });

    /****** Create Titles for pages ********/
    let title;
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter')
      && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      title = node.frontmatter.title;
    } else {
      title = parsedFilePath.name.replace('-', '');
    }
    createNodeField({ node, name: 'title', value: title });
    console.log("title is " + title)
  }
};

// Add an implementation of the createPages API which Gatsby calls so plugins can add pages.
//  Using the supplied graphql function to query the markdown slugs previously created

/************* UNCOMMENT BELOW TO CREATE PAGES  ****/

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const docsPage = path.resolve("src/templates/doc.jsx") //used in the createPage function

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              permalink
              slug
            }
          }
        }
      }
    }
  `)

  // Create a blog post for each node and use the permalink as path
  // Check https://www.gatsbyjs.com/docs/actions/#createPage for more details
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { permalink } = node.fields; //get the permalink from the graphql query and use it as path

    createPage({
      path: permalink,
      component: docsPage, //check const above, we use that docs.jsc to create each page
      context: {
        //Context data for this page. Passed as props to the component this.props.pageContext
        // as well as to the graphql query as graphql arguments. (as a variable)
        slug: node.fields.slug,
        id:node.id, //will be passed as an argument in our query in the doc.jsx template. Identifies each page that will be created.
      },
    });

    console.log("id is " + node.id)
  });
}


/*****************/


//To check that the pages have been created correctly with the slugs, go to a random address that leads to a 404 page:
// for example http://localhost:8000/sdf
//The blog posts with the slugs will be listed there.
