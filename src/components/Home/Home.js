import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';
import fakePlace from '../../fakeData/Place';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceCart from '../PlaceCart/PlaceCart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Home = () => {
    const [places, setPlace] = useState(fakePlace);
    const [placeCart, setPlaceCart] = useState([]);

    const handlePlace = (placeId) => {
        const newPlace = [...placeCart, placeId];
        setPlaceCart(newPlace);
        addToDatabaseCart(placeId, 1);
    }
    return (
        <div>
            <div class="container-fluid">
                <div className="row">
                    <div class='col-md-6 mt-5'>
                        <PlaceCart placeCart={placeCart}></PlaceCart>
                    </div>
                    <div class='row col-md-6'>
                        {
                            places.map(pl => <PlaceDetails 
                                handlePlace ={handlePlace}
                                key={pl.id}
                                place={pl}>
                                </PlaceDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;