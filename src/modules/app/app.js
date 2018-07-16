import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Athletes from '../athletes/athletes';
import Home from '../home/home';
import Schedule from '../schedule/schedule';
import Sports from '../sports/sports';

import './app.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div className="routes">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/athletes">Athletes</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/sports" component={Sports}/>
            <Route path="/athletes" component={Athletes}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
