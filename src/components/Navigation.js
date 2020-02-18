import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(props) {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/sunsets" activeClassName="active" >Sunset</NavLink></li>
                <li><NavLink exact to="/waterfalls" activeClassName="active">Waterfalls</NavLink></li>
                <li><NavLink exact to="/rainbows" activeClassName="active">Rainbows</NavLink></li>
            </ul>
        </nav>
    )
}