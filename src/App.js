import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="main-body">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
