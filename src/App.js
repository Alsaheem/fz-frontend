import React from 'react';
import './App.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import { useLocation ,Link} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './containers/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <hr/>
      <h4 className="text-white">
        No path such as<code className="text-white">{location.pathname}</code>
      </h4>
      <div class="page-wrap d-flex flex-row align-items-center">
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <span className="display-1 d-block text-white" >404</span>
            <div className="mb-4 lead text-white">The page you are looking for was not found.</div>
            <Link to="/">
              <a className="btn btn-link">Back to Home</a>
            </Link>
        </div>
      </div>
      </div>
    </div>

    </div>
  );
}