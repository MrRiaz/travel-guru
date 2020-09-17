import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const PlaceCart = () => {
    return (
        <div className="text-light">
            <h1>Cox's Bazar</h1>
            <p>Cox's Bazar, the most attractive tourist spots for Bangladesh and not only for Bangladesh it's the longest sea beach in the world. Seventy-five miles 120 Kilo miters sandy sea beach with a gentle slop.</p>
            <Button variant="warning">Booking →</Button>
        </div>
    );
};

export default PlaceCart;