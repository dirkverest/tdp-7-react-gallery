import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/newyork" activeClassName="active">New York</NavLink></li>
                <li><NavLink to="/manhattan" activeClassName="active">Manhattan</NavLink></li>
                <li><NavLink to="/soho" activeClassName="active">Soho</NavLink></li>
            </ul>
        </nav>
    )
}