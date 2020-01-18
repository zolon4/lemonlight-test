import React from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import News from './components/pages/News';
import Contact from './components/pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex">
        <Navigation />
        <Switch>
          <div className="flex-grow">
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
