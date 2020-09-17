import React, { useContext, useState } from 'react';
import fakeHotel from '../../fakeData/Hotel';
import GMaps from '../GMaps/GMaps';
import { UserContext } from '../../App';
import Hotels from '../Hotels/Hotels';

const SeeHotel = () => {
    const [hotels, setHotels] = useState(fakeHotel);
    const [place, setPlaces] = useContext(UserContext);
    return (
        <div class="container-fluid text-light">
            <h4> Stay in {place.title}</h4>
                <div className="row">
                    <div class='col-md-6 mt-5'>
                        {
                            hotels.map(hotel => <Hotels 
                                key = {hotel.id}
                                hotel = {hotel}>
                                </Hotels>)
                        }
                    </div>
                    <div class='row col-md-6'>
                        <GMaps></GMaps>
                    </div>
                </div>
            </div>
    );
};

export default SeeHotel;