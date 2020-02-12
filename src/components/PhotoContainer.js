import React from 'react';
import Title from './Title';
import Photo from './Photo';
import NotFound from './NotFound';

export default function PhotoContainer ({data}) {
    return (
        <div className="photo-container">
            <Title />
            <ul>
                <Photo />
                <NotFound />
            </ul>
        </div>
    )
}