import React from 'react';

const PlaceDetails = (props) => {
    console.log(props);
    const {title, img, id} = props.place;
    return (
                <div class="col-md-4 mt-5">
                    <button onClick={() => props.handlePlace(props.place)} class="bg-transparent border-0">
                    <img class="card-img" src={img} alt="..."/>
                    <h4 class='text-light'> {title} </h4>
                    </button>
                </div>
    );
};

export default PlaceDetails;