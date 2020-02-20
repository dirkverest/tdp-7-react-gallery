import React from 'react';
import PropTypes from 'prop-types';

// Create single image elements
export default function Photo({photoData}) {
    return ( 
        <li>
            <img src={`https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}.jpg`} alt={photoData.title} />
        </li>
    )
}

Photo.protoTypes = {
    photoData: PropTypes.object.isRequired
}