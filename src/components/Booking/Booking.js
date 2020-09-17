import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/Place';
import { UserContext } from '../../App';
import './Booking.css';
import {
    Link
  } from "react-router-dom";

const Booking = () => {
    const { PlaceId } = useParams();
    const [place, setPlace] = useContext(UserContext);
    console.log(place);
    const places = fakeData.find(fd => fd.id == PlaceId);
    setPlace(places);
    return (
        <div className="text-light container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1> {places.title} </h1>
                    <p> {places.details} </p>
                </div>
                <div className="col-md-6 form-area">
                <form className="p-4">
                    <div class="form-group text-dark">
                        <label className="font-weight-bolder" for="exampleInputEmail1">Origin</label>
                        <input defaultValue={places.origin} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <label className="font-weight-bolder" for="exampleInputPassword1">Distanation</label>
                        <input type="text" defaultValue={places.title} class="form-control" id="exampleInputPassword1"/>
                        <div className="row justify-content-between">
                            <div className="ml-3">
                                <label className="font-weight-bolder" for="birthday">From</label>
                                <input type="date" class="form-control" id="birthday" name="birthday"/>
                            </div>
                            <div className="mr-3">
                                <label className="font-weight-bolder" for="birthday">To</label>
                                <input type="date" class="form-control" id="birthday" name="birthday"></input>
                            </div>
                        </div>
                    </div>
                    <Link to="/seeHotel">
                        <button type="button" class="btn mt-3 booking btn-warning">Start Booking</button>
                    </Link>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;