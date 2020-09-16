import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const PlaceCart = (props) => {
    const placeCart = props.placeCart;
    return (
        <div className="text-light">
            { placeCart.map(plc => <div><h2 >{plc.title}</h2>
            <p>
                {plc.details}
            </p> </div> ) }
            <Link to="/booking"><Button variant="warning">Booking →</Button></Link>
        </div>
    );
};

export default PlaceCart;