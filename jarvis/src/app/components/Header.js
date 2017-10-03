import React from 'react';
import h from 'react-hyperscript';
import { NavLink } from "react-router-dom"; 


export const Header = () => {
    return (
        <nav className='navbar navbar-default'>
            <div className='container'>
                <div className='navbar-header'>
                    <ul className='nav navbar-nav'>
                        <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/mybooks' activeClassName='active'>My Books</NavLink></li>
                        <li><NavLink to='/sharebooks' activeClassName='active'>Share My Books</NavLink></li>
                        <li><NavLink to='/requestbooks' activeClassName='active'>Request for Books</NavLink></li>
                        <li><NavLink to='/returnbooks' activeClassName='active'>Return Books</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};