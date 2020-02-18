import React from 'react';
import Title from './Title';
import Loading from './Loading';
import Photo from './Photo';
import NotFound from './NotFound';



export default function PhotoContainer(props) {
    
        if (props.prevQuery !== props.urlQuery) {
            props.onSearch(props.urlQuery);
            return (
                <div className="photo-container">
                    <ul>
                        <Loading />
                    </ul>
                </div>
            )
        } else if (!props.loading && props.prevQuery === props.urlQuery)  {
            if (props.loading) {
                return (
                    <div className="photo-container">
                        <ul>
                            <Loading />
                        </ul>
                    </div>
                )
            } else if (!props.loading && props.data.length > 0) {
                
                return (
                    <div className="photo-container">
                        <Title query={props.urlQuery} />
                        <ul>
                            {props.data.map( photo => {
                                return(<Photo key={photo.id} photoData={photo} />)})}
                        </ul>
                    </div>
                )
            } else if (props.data.length <= 0)  {
                return (
                    <div className="photo-container">
                        <ul>
                            <NotFound searchInput={props.searchInput} />
                        </ul>
                    </div>
                )
            }
        } else if (props.loading) {
            return (
                <div className="photo-container">
                    <ul>
                        <Loading />
                    </ul>
                </div>
            )
        }
}