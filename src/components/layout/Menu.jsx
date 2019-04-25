import React from 'react';
import './Menu.scss';
import Icons from '../layout/Icons';
const Menu = props => {
    return (
        <div className="navbar" style={props.style}>
            <div className="logo-container">
                <img src="./images/logo.png" alt="logo" className="logo"></img>
            </div>
            <nav className="menu">
                <a className="menu-link" href="#destinos">Destinos</a>
                <a className="menu-link" href="#nosotros">Quienes Somos</a>
                <a className="menu-link" href="#donde-estamos">Donde estamos</a>
            </nav>
            <Icons />
        </div>
    )
};


export default Menu;