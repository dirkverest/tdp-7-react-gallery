import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/sunset" activeClassName="active" >Sunset</NavLink></li>
                <li><NavLink exact to="/waterfall" activeClassName="active">Waterfall</NavLink></li>
                <li><NavLink exact to="/rainbow" activeClassName="active">Rainbow</NavLink></li>
            </ul>
        </nav>
    )
}