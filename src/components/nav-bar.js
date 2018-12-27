import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => (
  <nav>
    <div className="container">
    React SEO Demo | <Link to="/">Home</Link> | Welcome! What would you like to view? 
    <p>
      Routing: <Link to="/url-bad-loader">Bad Component Switching</Link> | <Link to="/browser-router">Browser Router Demo</Link> | <Link to="/hash-router">Hash Router Demo</Link>
      <br></br>
      Meta Tags: 
    </p>
    </div>
  </nav>
)

export default NavBar;
