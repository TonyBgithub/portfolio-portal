import React from "react";
import { Link } from 'gatsby';
// import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
// import Search from '../components/Search';
import Layout from "../components/layout";
import "./index.scss";
import CALLOUTS from '../constants/homeCallouts';


function Index() { 
// Pseudocode:
//1. Import the cards (objects) from their folder.
//2. Create a function that creates a card for each card (object) it detects.
//3. Inside that function, insert links to the blog posts/docs

function renderCallouts() {
  //Get the cards from the imported homeCallouts 
  return CALLOUTS.map((card) => {
    const cardClass = `card col-home-callout home-callout callout--${card.BADGE}`;
    // Handle internal and external links in cards
    const cardLinkButton = card.LINK.substring(0, 4) === 'http'
      ? <a href={card.LINK} className="btn btn-primary center">Let's See it!</a>
      : <Link to={card.LINK} className="btn btn-primary center">Read Article</Link>;

    return (
      <div className={cardClass} key={card.TITLE}>
        <div className="home-callout__badge">
          {card.BADGE}
        </div>
        <h3 className="card__title is-size-h2 m-bottom-2">
          {card.TITLE}
        </h3>
        <div className="is-p">{card.COPY}</div>
        {cardLinkButton}
      </div>
    );
  });
}


  //We use the layout without the subNav (compare to docs.jsx)
  return (
    <Layout >
      <div className="docs-home">
      <SEO postNode={props} title={config.siteTitle} description="TBCodeLab Documentation Home" />
          <div className="search-hero ta-center color-white">
            <div className="container">
              <div className="search-hero__bg">
                <h1 className="page-title"> Documentation Portal</h1>  
              </div>
            </div>
          </div>
          <div className="home-callouts">
            <div className="container">
              <div className="row row--home-callouts">
                {renderCallouts()}
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Index;


