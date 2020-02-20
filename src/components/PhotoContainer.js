import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Loading from './Loading';
import Photo from './Photo';
import NotFound from './NotFound';
import Error from './Error';



export default function PhotoContainer({loading, error, errorMessage, photoData, query}) {
    if (loading) {
        return (
            <div className="photo-container">
                <ul>
                    <Loading />
                </ul>
            </div>
        )
    } else if (error) {
        return (
            <Error errorMessage={errorMessage} />
        )
    } else if (photoData.length > 0) {
        return (
            <div className="photo-container">
                <Title query={query} />
                <ul>
                    {photoData.map( photo => {
                        return(<Photo key={photo.id} photoData={photo} />)})}
                </ul>
            </div>
        )
    } else if (photoData.length <= 0)  {
        return (
            <div className="photo-container">
                <ul>
                    <NotFound query={query} />
                </ul>
            </div>
        )
    }   
}


PhotoContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    photoData: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
}