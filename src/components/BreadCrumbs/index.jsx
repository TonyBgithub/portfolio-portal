import React, { useState } from 'react';
import { Link } from 'gatsby';
// import _ from 'lodash';

function BreadCrumbs (props){
  //extract pathname from the props so we can use it.
  const { location } = props;
  const { pathname } = location;
  const pathParts = getPathParts();

  // We assign the result of getSubPaths to state, so we can update the breadcrumbs bar
  const [pathItems, setPathItems] = useState(getSubPaths());


  function getPathParts() {
    const parts = pathname.split('/'); //split the pathname into parts using / as separator. Creates an array.
    // It's possible that "docs" or "misc", or any other category, will appear in the breadcrumbs. 
    // In the long run, try to find a filter that applies to all the categories.
    //We might need to filter those. 
    //We also want to filter out empty strings using item.length
    return parts.filter(item => item.length && item !== 'docs' && item !== 'misc' && item !== 'bio');
  }
  

  function getSubPaths() {
    const home =
  {
    textNode: "home",
    to: "/"
  };
    // This removes everything to the right of the path when it finds the pathPart.
    const allPaths = pathParts.map((text) => {
    const path = pathname.substring(0, pathname.indexOf(text)) + text;
    //Then we filter out docs and create the textnode and redirection link
    const to = `${path.replace('/docs', '')}/`;
    const textNode = text.replace(/-/g, ' ');
    return (
      {
        textNode,
        to,
      }
    );
  });

    //replace this by commented code below when there is more than one path.
    const subPaths = allPaths;
    return [home, ...subPaths];
  }
  
  //************** Uncomment code between star lines when the path is longer than 1 item  **********/
  //   // All paths but current page -- title is added in render method
  //   const subPaths = [...allPaths.slice(0, allPaths.length - 1)];

  //   // Combine with home object and return.
  //   return [home, ...subPaths];
  // }
  
  //Use pagetitle as textNode


  return (
    <div>
      <ul className="breadcrumb">
      {pathItems.map((item) => {
        const classes = `breadcrumb-item-${item.textNode.replace(' ', '-').toLowerCase()}`;
        return (
          <li key={item.textNode} className={classes}>
                <Link to={item.to}>{item.textNode}</Link>
              </li>
        );
      })}
      </ul>
      </div>
    );
  }

export default BreadCrumbs;
