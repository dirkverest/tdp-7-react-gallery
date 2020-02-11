import React, { Component } from 'react';
import Title from './Title';
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {
    render() {
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
}