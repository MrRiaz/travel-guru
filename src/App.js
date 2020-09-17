import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "firebase/auth";
import Booking from './components/Booking/Booking';
import NoMatch from './components/NoMatch/NoMatch';
import SeeHotel from './components/SeeHotel/SeeHotel';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [place, setPlaces] = useState({})
  return (
    <div className="main-body">
      <UserContext.Provider value={[place, setPlaces]}>
        <p> id: {place.name} {place.id} </p>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/place/:PlaceId">
            <Booking/>
          </Route>
          <PrivateRoute path="/seeHotel">
            <SeeHotel/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
