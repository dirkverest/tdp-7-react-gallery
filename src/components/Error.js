import React from 'react';
import PropTypes from 'prop-types';

// Handle Fetch error and url error
export default function Error({errorMessage}) {
    if (errorMessage) {
        return ( 
            <div className="photo-container">
                <h3>
                    Oops, {errorMessage}
                </h3>
            </div>
        )
    } else {
        return ( 
            <div className="photo-container">
                <h3>
                    Oops, we have a 404 error! This url does not exist...
                </h3>
            </div>
        )
    }
}

Error.propTypes = {
    errorMessage: PropTypes.string
}