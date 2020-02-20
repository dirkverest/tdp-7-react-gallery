import React from 'react';

// Display loading message and animation
export default function Loading() {
    return ( 
        <li className="loading">
            <h3>
                Loading Photo's
            </h3>
            <div className="loader"></div>
        </li>
    )
}