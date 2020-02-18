import React from 'react';

export default function Photo({photoData}) {
    return ( 
        <li>
            <img src={`https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}.jpg`} alt={photoData.title} />
        </li>
    )
}