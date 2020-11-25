import React from "react"
import { graphql } from "gatsby"
import _ from 'lodash';
import Layout from "../components/layout"
import SEO from "../components/SEO"
import AsideMenu from '../components/AsideMenu';
import RehypeReact from 'rehype-react';
import "./doc.scss"

const renderAst = new RehypeReact({
  createElement: React.createElement,
},).Compiler;

function DocTemplate(props) {
  const { data } = props;
  //Passing the data from the query as an argument.
 
function  getLinks() {
  //filter the html Abstract Syntax Tree (AST) for h2s and h3s
    const headers = data.doc.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
  //for each header, create an asideLink
  // logging the headers can help manipulate the data
  console.log(headers);
  //for each header, set the textnode from the page anchor
    return headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1] ? header.children[1].value : ''; //the markdown-autolink-header plugin creates a link as headerchildren[0], we get the text from the h2
      link.id = header.properties.id;
      return link;
    });
  }
 
const postNode = data.doc; //the data from query will be passed to SEO as parameter

//Below, subNav={true} defines whether the sub navigation should be applied. If the parameter is not set, the index page throws an error because it tries to use the subnav that is not defined.
return (
    <Layout location={props.location} subNav={true}> 
      <div className="container-lg doc-wrap">
      <SEO title={postNode.frontmatter.title} description={postNode.frontmatter.description} />
      <AsideMenu asideLinks={getLinks()} />
        <div className="doc-main">
        <h1 dangerouslySetInnerHTML= {{__html:postNode.fields.title}} />
        {renderAst(postNode.htmlAst)}
          {/* rendering Ast thanks to rehypereact */}
        </div>
      </div>
    </Layout>
  )
}

export default DocTemplate;

export const pageQuery = graphql`
 # Here we use the operation type query and operation name BlogPostByID (could be anything)   
 # Then use a variable that we declare and use inside the query
 query BlogPostByID($id: String!) {  #Variable definition. We get the id from the createPage context in gatsby-node.js
    doc: markdownRemark(id: { eq: $id } ) { #That way, each page with a unique id is created according to this template. 
      htmlAst
      html
      fileAbsolutePath
      frontmatter {
        title
        description
      }
      fields {
        slug
        title
        permalink
      }
    }
  }
`;