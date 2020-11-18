import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../../data/SiteConfig';

function SEO(props) {

const { postNode } = props;

const title = postNode.fields.title;

return (
    <Helmet>
    <title> {`${title} | ${config.siteTitle}`}</title>
    </Helmet>
)
}

export default SEO;