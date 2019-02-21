import React from 'react';
import { NavLink } from 'react-router-dom'

export const TopMenu = () => {
    return (
        <div className="col-12 top-menu">
            <ul>
                <li><NavLink to='/country/ua'>Украина</NavLink></li>
                <li><NavLink to='/country/pl'>Польша</NavLink></li>
                <li><NavLink to='/country/uk'>Англия</NavLink></li>
                <li><NavLink to='/country/it'>Италия</NavLink></li>
            </ul>
        </div>
    )
}