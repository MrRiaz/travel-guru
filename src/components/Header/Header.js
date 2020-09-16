import React from 'react';
import './Header.css';
import Logo from '../../travelGuru/Logo2.png';
import {
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link to="/home"><img src={Logo} alt=""/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link to="/home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/home">Destination</Link>
                </li>
                <li class="nav-item">
                  <Link to="/home">Blog</Link>
                </li>
                <li class="nav-item">
                  <Link to="/home">Contact</Link>
                </li>
                <Link to="/login">
                  <Button variant="warning">Login</Button>
                </Link>
                </ul>
            </div>
        </nav>
    );
};
export default Header;