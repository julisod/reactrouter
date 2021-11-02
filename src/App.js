import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

import "./App.css";

const App = () => {
  //cd Documents/Koulu/Front end/reactrouter
  return (
    <div className="App"> 
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{'  '}
          <Link to="/about">About</Link>{'  '}
          <Link to="/contact">Contact</Link>{'  '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" render={() => <h1>Contact address</h1>} />
            <Route render={()  => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
