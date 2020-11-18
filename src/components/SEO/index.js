import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../../data/SiteConfig';

function SEO(props) {

const { postNode } = props;

const title = postNode.fields.title;

return (
    <Helmet>
    <title> {`${title} | ${config.siteTitle}`}</title>
    <meta property="og:title" content={config.siteTitle} />
    <meta property="og:description" content={config.siteDescription} />
    <meta property="og:image" content={config.ogImage} />
    <meta property="og:url" content={config.siteUrl} />
    </Helmet>
)
}

export default SEO;