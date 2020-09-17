import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';
import fakePlace from '../../fakeData/Place';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceCart from '../PlaceCart/PlaceCart';
// import { addToDatabaseCart } from '../../utilities/databaseManager';

const Home = () => {
    const [place, setPlace] = useState(fakePlace);
    return (
        <div>
            <div class="container-fluid">
                <div className="row">
                    <div class='col-md-6 mt-5'>
                        <PlaceCart></PlaceCart>
                    </div>
                    <div class='row col-md-6'>
                    {/* placeCart={placeCart} handlePlace ={handlePlace} */}
                        {
                            place.map(pl => <PlaceDetails 
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