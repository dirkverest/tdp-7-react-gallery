import React from 'react';
import PropTypes from 'prop-types';

export default function NotFound({query}) {
    return ( 
        <li className="not-found">
            <h3>
                Sorry, no Results Found for {query}
            </h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}

NotFound.propTypes = {
    query: PropTypes.string.isRequired
}