import React, { Component } from 'react';
import './Footer.scss';

function Footer(){
    return (
      <footer className="footer">
        <div className="container-lg footer-container">
          <div className="footer-logo" />
          <ul>
            <li>
              <a href="#" title="About">About</a>
            </li>
            <li>
              <a href="#" title="Terms">Terms</a>
            </li>
            <li>
              This Portal is Open Source
            </li>
          </ul>
        </div>
      </footer>
    );
  }

export default Footer;
