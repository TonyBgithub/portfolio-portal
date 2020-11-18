/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';

export default function HTML (props) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {props.headComponents}

          <link rel="shortcut icon" type="image/x-icon" href="#" />
          <link rel="apple-touch-icon" sizes="57x57" href="#" />
          <link rel="apple-touch-icon" sizes="60x60" href="#" />
          <link rel="apple-touch-icon" sizes="72x72" href="#" />
          <link rel="apple-touch-icon" sizes="76x76" href="#" />
          <link rel="apple-touch-icon" sizes="114x114" href="#" />
          <link rel="apple-touch-icon" sizes="120x120" href="#" />
          <link rel="apple-touch-icon" sizes="144x144" href="#" />
          <link rel="apple-touch-icon" sizes="152x152" href="#" />
          <link rel="apple-touch-icon" sizes="180x180" href="#" />
          <link rel="icon" type="image/png" sizes="192x192" href="#" />
          <link rel="icon" type="image/png" sizes="32x32" href="#" />
          <link rel="icon" type="image/png" sizes="96x96" href="#" />
          <link rel="icon" type="image/png" sizes="16x16" href="#" />
          <link rel="manifest" href="#" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="#" />
          <meta name="theme-color" content="#ffffff" />

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
