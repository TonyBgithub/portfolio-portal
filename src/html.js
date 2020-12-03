/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';

export default function HTML (props) {
    return (
      <html lang="en">
        <head>
        <meta property="og:image" content="https://tb-documentation-portal.netlify.app/social-media.png" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {props.headComponents}
        </head>
        <body>
          {props.preBodyComponents}
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    );
}
