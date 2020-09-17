import React, {useContext} from 'react';
import './Hotels.css';
import star from '../../travelGuru/Icon/star_1_.png';

const Hotels = (props) => {
    const {name, bio, rating, rate, imgURL } = props.hotel;
    
    return (
        <div className="row mb-5 align-items-center text-light">
            <div className="col-md-5">
                <img className="hotel" src={imgURL} alt=""/>
            </div>
            <div class='row col-md-7'>
                <h4> {name} </h4>
                <p> {bio} </p>
                <div className="d-flex">
                    <p><img className="icon" src={star} alt=""/> {rating} </p>
                    <p className="ml-5"> {rate} </p>
                </div>
            </div>
        </div>
    );
};

export default Hotels;