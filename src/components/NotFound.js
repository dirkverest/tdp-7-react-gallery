import React from 'react';

export default function NotFound({searchInput}) {
    return ( 
        <li className="not-found">
            <h3>
                Sorry, no Results Found for {searchInput}
            </h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}