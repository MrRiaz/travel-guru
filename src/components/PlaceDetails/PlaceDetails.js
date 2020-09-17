import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

const PlaceDetails = (props) => {
    // console.log(props);
    const {title, img, id,} = props.place;
    return (
            <div class="col-md-4 mt-5">
                <Link to={"/place/"+id}>
                    <img class="card-img" src={img} alt="..."/>
                </Link>
                <h4 class='text-light'> {title} </h4>
                {/* <button onClick={() => props.handlePlace(props.place)} class="bg-transparent border-0">
                    <h4 class='text-light'> {title} </h4>
                </button> */}
            </div>
    );
};

export default PlaceDetails;