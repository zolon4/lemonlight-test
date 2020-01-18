import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import Navigation from './components/Navigation';
import News from './components/pages/News';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex">
        <Navigation />
        <div className="flex-grow">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
