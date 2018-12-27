import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import UrlBadLoader from './url-bad-loader'
import UsingHashRouter from './using-hash-router'
import UsingBrowserRouter from './using-browser-router'
import NavBar from './nav-bar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/url-bad-loader' component={UrlBadLoader} />
          <Route path='/hash-router' component={UsingHashRouter} />
          <Route path='/browser-router' component={UsingBrowserRouter} />
        </Switch>
      </div>
    );
  }
}

export default App;
