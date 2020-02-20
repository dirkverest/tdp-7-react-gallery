import React from 'react';
import PropTypes from 'prop-types';

// 
export default function Title({query}) {
    return (
        <h2>
            {query} Photo's
        </h2>
    )
}

Title.propTypes = {
    query: PropTypes.string.isRequired
}